import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule,}                     from '@angular/common';
//
import { IonicModule }  from '@ionic/angular';
import { AlertController} from '@ionic/angular';
//my interface
import { Chapter,Level,Count}       from '../../interfaces/types'
// my services
import { SettingsService }     from 'src/app/services/settings.service';
import { TraductionService }   from 'src/app/services/traduction.service';
import { ConfigEngService }    from 'src/app/services/config-eng.service';
import { ConfigFrService }     from 'src/app/services/config-fr.service';
@Component({
  selector: 'app-initial-setup',
  standalone: true,
  templateUrl: './initial-setup.component.html',
  styleUrls: ['./initial-setup.component.scss'],
  imports:[
    IonicModule,
    CommonModule,
  ],
})
export class InitialSetupComponent {

  // Variable pour indiquer la étape en cours
  currentStep: number = 1; // 1: choix langue, 2: chapitre, 3: niveau, 4: compte

  // Variables pour garder les choix
  selectedLanguage:   string = 'fr';
  selectedChapter:    number = 1 ;
  selectedLevel:      string = 'd';
  selectedCount:      string = '1';
  //
  textChooseChapter:  string = '';
  textChooseLevel:    string = '';
  textChooseCount:    string = '';  
  textButton:         string = '';
  textConfirmChoice:  string = 'Confirmer votre choix';
  //
  textMessageEn: string   = 'make a choice';
  textMessageFr: string   = 'faites un choix';
  textMessageEnFr: string = 'faites un choix - make a choice'
  //
  chapters: Chapter[] = [];
  levels:   Level[]   = [];
  account:  Count[]   = [];
  //
  chapterChoiceIsDone:  boolean = false;
  languageChoiceIsDone: boolean = false;
  countChoiceIsDone:    boolean = false;
  levelChoiceIsDone:    boolean = false;

  @Output() setupFinished = new EventEmitter<void>(); // Émet quand tout est terminé

  constructor(
    private settingsService:   SettingsService,
    private traductionService: TraductionService,
    private configEnService:   ConfigEngService,
    private configFrService:   ConfigFrService,
    private alertController:   AlertController,
  ) 
    {}

  // Lance le processus de configuration (si besoin)
  start() {
    this.currentStep = 1;
  }

  ///////////// Choix de la langue
  selectLanguage(lang: string) {
    this.languageChoiceIsDone=true;
    this.selectedLanguage    = lang;
    this.textChooseChapter   = this.traductionService.findGoodLabel(lang,'Choisissez votre chapitre','Choose your chapter');
    this.textChooseLevel     = this.traductionService.findGoodLabel(lang,'Choisissez votre niveau',  'Choose your chapter');
    this.textChooseCount     = this.traductionService.findGoodLabel(lang,'Choisissez votre compte',  'Choose your account');
    this.textConfirmChoice   = this.traductionService.findGoodLabel(lang,'Confirmer votre choix',    'Confirm your choice');
    this.textButton          = this.traductionService.findGoodLabel(lang,'Valider vos choix',  'Validate your choices');
    //
    if (lang === 'en') {
      this.chapters   = this.configEnService.appNameChapters;
      this.levels     = this.configEnService.appNameLevels;
      this.account    = this.configEnService.appCount;
    };
    if (lang === 'fr') {
      this.chapters   = this.configFrService.appNameChapters;
      this.levels     = this.configFrService.appNameLevels;
      this.account    = this.configFrService.appCount;
    };
  }
//
  confirmLanguageSelection(){
    if (this.languageChoiceIsDone) {this.currentStep = 2} // étape suivante
    else {this.confirmSelection(this.textMessageEnFr)}
  }
  whatMessage ():string{
    let message:string = '';
    if (this.selectedLanguage === 'en') {message = this.textMessageEn}
    else {message = this.textMessageFr};
    return message
  }
////////////////////// choix du chapitre
  selectChapter(numChapter:number){
    this.selectedChapter = numChapter;
    this.chapterChoiceIsDone = true;
  }

  confirmChapterSelection(){
    if (this.chapterChoiceIsDone) {this.currentStep = 3} // étape suivante
    else {this.confirmSelection(this.whatMessage())};
  }

  ////////////// Choix du niveau
  selectLevel(level: string) {
    this.levelChoiceIsDone = true;
    console.log('initial-setup',level);
    this.selectedLevel = level;
  }

  confirmLevelSelection(){
     if (this.levelChoiceIsDone) {this.currentStep = 4} // étape suivante
    else {this.confirmSelection(this.whatMessage());}
  }

  /////////////////// Choix du compte
  selectCount(count: string) {
    this.countChoiceIsDone = true;
    this.selectedCount = count;
  }
  confirmCountSelection(){
    if (this.countChoiceIsDone) {this.validate();} // étape suivante
    else {this.confirmSelection(this.whatMessage())}
  }
  validate()
  { const numChapterAsString: string  = this.selectLevel + '';
    let nameItem = this.selectedLevel + this.selectedChapter + '_1q'; 
    this.settingsService.setFirstTime(false);
    this.settingsService.setLanguage(this.selectedLanguage);
    this.settingsService.setItem(nameItem);
    this.settingsService.setCount(this.selectedCount);
    // Fin de la configuration, émettre l'événement
    this.setupFinished.emit();
  }

  async confirmSelection(message:string) {
    // Aucun choix effectué
    const alert = await this.alertController.create({
      header: 'Attention',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
    return; // on sort, la validation ne se fait pas
  }
}

