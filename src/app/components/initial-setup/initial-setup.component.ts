import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
// my interface
import { Chapter, Level, Count } from '../../interfaces/types'
// my services
import { SettingsService } from 'src/app/services/settings.service';
import { TraductionService } from 'src/app/services/traduction.service';
import { ConfigEngService } from 'src/app/services/config-eng.service';
import { ConfigFrService } from 'src/app/services/config-fr.service';

@Component({
  selector: 'app-initial-setup',
  standalone: true,
  templateUrl: './initial-setup.component.html',
  styleUrls: ['./initial-setup.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class InitialSetupComponent {
  currentStep = 1;

  selectedLanguage = 'fr';
  selectedChapter  = 1;
  selectedLevel    = 'd';
  selectedCount    = '1';

  textChooseChapter = '';
  textChooseLevel   = '';
  textChooseCount   = '';
  textButton        = '';
  textConfirmChoice = 'Confirmer votre choix';

  textMessageEn   = 'make a choice';
  textMessageFr   = 'faites un choix';
  textMessageEnFr = 'faites un choix - make a choice';

  chapters: Chapter[] = [];
  levels:    Level[]  = [];
  account:   Count[]  = [];

  chapterChoiceIsDone  = false;
  languageChoiceIsDone = false;
  countChoiceIsDone    = false;
  levelChoiceIsDone    = false;

  @Output() setupFinished = new EventEmitter<void>();

  constructor(
    private settingsService:   SettingsService,
    private traductionService: TraductionService,
    private configEnService:   ConfigEngService,
    private configFrService:   ConfigFrService,
    private alertController:   AlertController,
  ) {}

  start() { this.currentStep = 1; }

  selectLanguage(lang: string) {
    this.languageChoiceIsDone = true;
    this.selectedLanguage  = lang;
    this.textChooseChapter = this.traductionService.findGoodLabel(lang, 'Choisissez votre chapitre','Choose your chapter');
    this.textChooseLevel   = this.traductionService.findGoodLabel(lang, 'Choisissez votre niveau',  'Choose your level');
    this.textChooseCount   = this.traductionService.findGoodLabel(lang, 'Choisissez votre compte',  'Choose your account');
    this.textConfirmChoice = this.traductionService.findGoodLabel(lang, 'Confirmer votre choix',    'Confirm your choice');
    this.textButton        = this.traductionService.findGoodLabel(lang, 'Valider vos choix',        'Validate your choices');
    if (lang === 'en') {
      this.chapters = this.configEnService.appNameChapters;
      this.levels   = this.configEnService.appNameLevels;
      this.account  = this.configEnService.appCount;
    }
    if (lang === 'fr') {
      this.chapters = this.configFrService.appNameChapters;
      this.levels   = this.configFrService.appNameLevels;
      this.account  = this.configFrService.appCount;
    }
  }

  confirmLanguageSelection() {
    if (this.languageChoiceIsDone) { this.currentStep = 2; }
    else { this.confirmSelection(this.textMessageEnFr); }
  }

  selectChapter(numChapter: number) {
    this.selectedChapter     = numChapter;
    this.chapterChoiceIsDone = true;
  }

  confirmChapterSelection() {
    if (this.chapterChoiceIsDone) { this.currentStep = 3; }
    else { this.confirmSelection(this.whatMessage()); }
  }

  selectLevel(level: string) {
    this.selectedLevel     = level;
    this.levelChoiceIsDone = true;
  }

  confirmLevelSelection() {
    if (this.levelChoiceIsDone) { this.currentStep = 4; }
    else { this.confirmSelection(this.whatMessage()); }
  }

  selectCount(count: string) {
    this.selectedCount = count;
    this.countChoiceIsDone = true;
  }

  confirmCountSelection() {
    if (this.countChoiceIsDone) { this.validate(); }
    else { this.confirmSelection(this.whatMessage()); }
  }

  validate() {
    let nameItem = this.selectedLevel + this.selectedChapter + '_1q';
    this.settingsService.setFirstTime(true);
    this.settingsService.setLanguage(this.selectedLanguage);
    this.settingsService.setItem(nameItem);
    this.settingsService.setCount(this.selectedCount);
    console.log('initial-setup-validate',this.settingsService.getFirstTime());
    console.log('initial-setup-validate',this.settingsService.getLanguage());
    console.log('initial-setup-validate',this.settingsService.getItem());
    console.log('initial-setup-validate',this.settingsService.getCount());
    this.setupFinished.emit();
  }

  whatMessage(): string {
    return this.selectedLanguage === 'en' ? this.textMessageEn : this.textMessageFr;
  }

  async confirmSelection(message: string) {
    const alert = await this.alertController.create({
      header:   'Attention',
      cssClass: 'custom-alert-header-red center-button',
      message:  message,
      buttons: ['OK']
    });
    await alert.present();
  }

  computeStyles(isSelected: boolean, isConfirmed: boolean): { [klass: string]: any } {
    let bgColor = '#F5F5F5';   // gris clair par défaut
    let textColor = '#FF6F00'; // orange vif
    if (isSelected && !isConfirmed) {
      bgColor = '#90CAF9'; textColor = '#000';
    } else if (isSelected && isConfirmed) {
      bgColor = '#0D47A1'; textColor = '#fff';
    }
    return {
      'background-color': bgColor,
      'color'           : textColor,
      'padding'         : '10px',
      'margin'          : '5px 0',
      'border-radius'   : '8px',
      'cursor'          : 'pointer',
      'text-align'      : 'center',
      'font-weight'     : '500',
      'font-size'       : '18px',
      'transition'      : 'background 0.3s, color 0.3s'
    };
  }

  getLanguageStyles(lang: string) {
    return this.computeStyles(lang === this.selectedLanguage, this.languageChoiceIsDone);
  }
  getChapterStyles(ch: Chapter) {
    return this.computeStyles(ch.num === this.selectedChapter, this.chapterChoiceIsDone);
  }
  getLevelStyles(lvl: Level) {
    return this.computeStyles(lvl.index === this.selectedLevel, this.levelChoiceIsDone);
  }
  getCountStyles(c: Count) {
    return this.computeStyles(c.num === this.selectedCount, this.countChoiceIsDone);
  }
}

