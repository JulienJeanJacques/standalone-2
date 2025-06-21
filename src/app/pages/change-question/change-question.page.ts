import { Component, OnInit } from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { CommonModule } from '@angular/common';
//
import { IonicModule }       from '@ionic/angular';
import { NavController }     from '@ionic/angular';
// my services
import { SettingsService }           from '../../services/settings.service';
import { MenuController }            from '@ionic/angular';
import { TraductionService }         from 'src/app/services/traduction.service';
import { GestionConfigEngFrService } from 'src/app/services/gestion-config-eng-fr.service';
//my classes
import {Item} from '../../classes/item';
// my interfaces
import { ChoiceMenuSide } from '../../interfaces/types';


@Component({
  selector: 'app-change-question',
  standalone: true,
  templateUrl: './change-question.page.html',
  styleUrls: ['./change-question.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ChangeQuestionPage implements OnInit{
  count:      string = '1';
  accountName:string ='Ptolémée'
  textAccount:string ='Account used'
  itemName:   string = 'd1_1q';
  //itemInUse = new Item('d1_1q');
  language:   string = 'fr';
  theme:      string = 'light';
  textTitle:  string = 'change your question';
  textGoHome: string = 'Go to play';
  textChapter:string = 'Chapter';
  textLevel:  string = 'Level';
  textResponse:string = 'response';
  textContentLevelD:string ='beginner';
  textContentLevelC:string ='confirmed';
  textContentLevelE:string ='expert';
  chapters:  number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  questions: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  sideMenu:   ChoiceMenuSide[] = [];
  colorTitle:       string = 'white';
  selectedChapter:  number | undefined;
  selectedLevel:    string | undefined;
  selectedQuestion: number | undefined;
  selectedNature:   string | undefined;

  constructor(
    private navCtrl:                  NavController,
    private menu:                     MenuController,
    private settingsService:          SettingsService,
    private traductionService:        TraductionService,
    private gestionConfigEngFRService:GestionConfigEngFrService,
   ) {}

  ngOnInit() {
    //mon récupère les paramètres actuels 
    this.itemName = this.settingsService.getItem();
    this.count    = this.settingsService.getCount();
    this.language = this.settingsService.getLanguage();
    this.theme    = this.settingsService.getTheme();
    //
    this.accountName = this.gestionConfigEngFRService.getAccountName();
    //
    this.whatAreChapterLevelQuestion(this.itemName);
    //
    this.textAccount       = this.traductionService.findGoodLabel(this.language,'compte utilisé','Account used');
    this.textTitle         = this.traductionService.findGoodLabel(this.language,'Changez votre question','Change your question');
    this.textGoHome        = this.traductionService.findGoodLabel(this.language,'Retour au jeu','Go to play'); 
    this.textLevel         = this.traductionService.findGoodLabel(this.language,'Niveau','Level');
    this.textChapter       = this.traductionService.findGoodLabel(this.language,'Chapitre','Chapter');
    this.textResponse      = this.traductionService.findGoodLabel(this.language,'Réponse','Response');
    this.textContentLevelD = this.traductionService.findLevelName(this.language,'d')
    this.textContentLevelC = this.traductionService.findLevelName(this.language,'c')
    this.textContentLevelE = this.traductionService.findLevelName(this.language,'e')
    //
    this.applyTheme(this.theme); // Appliquer le thème au démarrage
    //
    this.updateChapter(this.itemName);
    //
    this.colorTitle = this.gestionConfigEngFRService.getColorTitle('Change question');
  }


  whatAreChapterLevelQuestion(itemName:string)
  { let item = new Item(itemName);
    this.selectedChapter = Number(item.chapter);
    this.selectedLevel   = item.level;
    this.selectedQuestion= Number(item.question);
  }

  updateChapter(itemName:string) {
    let item = new Item(itemName);
    item.changeChapter(item.chapter);
    this.settingsService.setItem(item.name); 
  }

  updateLevel(level: string) {
    let item = new Item(this.itemName);
    this.selectedLevel = level;
    item.changeLevel(level);
    this.settingsService.setItem(item.name); 
  }

  updateQuestion(question: number) {
    let item = new Item(this.itemName);
    this.selectedQuestion = question;
    item.changeQuestion(String(question));
    this.settingsService.setItem(item.name); 
  }
  updateNature(nature: string) {
    let item = new Item(this.itemName);
    this.selectedNature = nature;
    item.changeNature(nature);
    this.settingsService.setItem(item.name); 
  }
  submitChoices() {
    console.log('Chapitre sélectionné:',  this.selectedChapter);
    console.log('Niveau sélectionné:',    this.selectedLevel);
    console.log('Question sélectionnée:', this.selectedQuestion);
    console.log('nature sélectionnée:',  this.selectedNature);
  }
  applyTheme(theme: string) {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
  openMenu() {
    this.menu.open('sideMenu');
  }
  
  goHome() {
      this.navCtrl.navigateBack('/home'); 
    }
  }
