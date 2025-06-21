import { Component, OnInit } from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { CommonModule } from '@angular/common';
//
import { NavController }     from '@ionic/angular';
import { MenuController }    from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
//my Classes
import { Item } from '../../classes/item'
//my services
import { SettingsService }              from 'src/app/services/settings.service';
import { TraductionService }            from 'src/app/services/traduction.service';
import { GestionConfigEngFrService }     from '../../services/gestion-config-eng-fr.service';
import { ResultsService}                from '../../services/results.service';




@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
],
})
export class ResultsPage implements OnInit {
  textTitle:  string = 'Your results';
  colorTitle: string = 'white';

  // for account - To choose
  count:string       = '1';
  accountName:string = 'Galilé';
  // for chapter - To choose
  chapter: number = 1;
  chapters: number[] = Array.from({length: 12}, (_, i) => i + 1); // Génère un tableau de 1 à 12
  // for level -To choose
  level:string = 'd';
  //item
  itemName: string = '1d_1q';
  //theme
  theme:string = 'ligth'
  // for language: text
  language:           string = 'en'; 
  textGoHome:         string = 'Go to Play';
  textResults:        string = 'Your results:';
  textChoiceLevel:    string = 'Choice your level';
  textChoiceChapter:  string = 'Choice your chapter';
  textChoose:         string = 'Choose'
  textPercentage:     string = 'Percentage:'
  //
  k: number = 0.3; // Pourcentage en valeur décimale (par ex. 0.7 pour 70%)
  //
  
  //
    constructor(
      private navCtrl:                        NavController,
      private menu:                           MenuController,
      private settingsService:                SettingsService,
      private traductionService:              TraductionService,
      private gestionConfigEngFrService:     GestionConfigEngFrService,
      private resultsService:                 ResultsService,
    ) { }
  
  ngOnInit() {
    // on récupère les paramètres actuels 
    // we load App-params
    this.itemName = this.settingsService.getItem();
    this.count    = this.settingsService.getCount();
    this.language = this.settingsService.getLanguage();
    this.theme    = this.settingsService.getTheme();
    //account
    this.accountName = this.gestionConfigEngFrService.getAccountName();
    this.k = this.resultsService.percentage(this.count,this.itemName);
    //item for chapter and level
    this.accountOrItemChange(this.count,this.itemName);
    //
    this.colorTitle = this.gestionConfigEngFrService.getColorTitle('Your results');
    //language
    this.textTitle         = this.traductionService.findGoodLabel(this.language,'Vos résultats','Your results');
    this.textGoHome        = this.traductionService.findGoodLabel(this.language,'Retour au jeu','Go to play');
    this.textResults       = this.traductionService.findGoodLabel(this.language,'Avec le compte:','With the account:');
    this.textChoiceLevel   = this.traductionService.findGoodLabel(this.language,'le niveau','the level');
    this.textChoiceChapter = this.traductionService.findGoodLabel(this.language,'le chapitre ','the chapter ');
    this.textChoose        = this.traductionService.findGoodLabel(this.language,'Choisissez: ','Choose:');
    this.textPercentage    = this.traductionService.findGoodLabel(this.language,'Pourcentge: ','Percentage:');
   
  }

  accountOrItemChange(account:string,nameOfItem:string)
  { let results = this.resultsService.percentage(account,nameOfItem)

  }

  applyTheme(theme:string){
  }
  openMenu() {
    this.menu.open('sideMenu');
  }
  goHome() {
    this.navCtrl.navigateBack('/home'); 
  }
  }
  