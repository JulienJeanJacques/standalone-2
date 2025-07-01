import { Component, inject, OnInit, OnDestroy,ViewChild, ViewContainerRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { Subscription }                 from 'rxjs';
import { MenuController, IonicModule }  from '@ionic/angular';
// classes et services
import { Item } from '../../classes/item';
import { ComponentLoaderService }    from '../../services/component-loader.service';
import { SettingsService }           from '../../services/settings.service';
import { ConfigThemeService }        from '../../services/config-theme.service';
import { TraductionService }         from '../../services/traduction.service';
import { GestionConfigEngFrService } from 'src/app/services/gestion-config-eng-fr.service';
// components
import { ResponseComponent }         from 'src/app/components/response/response.component';
import { FooterAppComponent }        from '../../components/footer-app/footer-app.component';
import { FooterQuestionComponent }   from '../../components/footer-question/footer-question.component';
import { InitialSetupComponent }     from 'src/app/components/initial-setup/initial-setup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonicModule, 
    CommonModule,
    ResponseComponent, 
    FooterAppComponent, 
    FooterQuestionComponent, 
    InitialSetupComponent,
  ],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {
  private settingsSubscription!: Subscription;
  componentName = 'd1_1q';
  item = new Item('d1_1q');
  accountName = 'Galilé';
  levelName = 'débutant';
  natureOfItem = 'Question :';
  titleOfChapter = 'Titre du chapitre';
  showInitScreen = false;
  private initialized = false; // pour éviter les doublons

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private menuCtrl: MenuController,
    private componentLoader: ComponentLoaderService,
    private settingsService: SettingsService,
    private traductionService: TraductionService,
    private themeService: ConfigThemeService,
    private gestionConfigEngFrService: GestionConfigEngFrService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.showInitScreen = this.settingsService.getFirstTime();
  }

  async ngAfterViewInit() {
    // Si ce n’est PAS le premier setup, initialiser directement
    if (!this.showInitScreen && !this.initialized) {
      await this.initializePage();
    }
  }

  async initializePage() {
    this.initialized = true;
    const params = await this.settingsService.initialize();
    this.settingsService.initialiseApp();
    this.loadLanguage();
    this.loadTheme(params.theme);
    this.accountName = this.gestionConfigEngFrService.getAccountName();
    if (this.settingsSubscription) this.settingsSubscription.unsubscribe();
    this.loadComponent();
  }

  loadComponent() {
    if (!this.container) {console.warn('container is not yet available');return;}
    this.item = new Item(this.settingsService.getItem());
    this.container.clear();
    const component = this.componentLoader.getComponent(this.item.name);
    if (component) {
      this.container.createComponent(component);
    } else {
      console.log(`Aucun composant trouvé pour: ${this.item.name}`);
    }
    const language = this.settingsService.getLanguage();
    this.loadLevel();
    this.loadNatureOfItem();
    this.loadTitleOfChapter(this.item.chapter, language);
    this.cdr.detectChanges();
  }

  onSetupFinished() {
    this.showInitScreen = false;
    this.initialized = false;
    this.cdr.detectChanges();
    setTimeout(() => { this.initializePage();}, 0);
  }

  loadLanguage() {
    const language = this.settingsService.getLanguage();
    this.loadLevel();
    this.loadNatureOfItem();
    this.loadTitleOfChapter(this.item.chapter, language);
  }

  loadNatureOfItem() {
    this.item = new Item(this.settingsService.getItem());
    const language = this.settingsService.getLanguage();
    if (this.item.nature === 'q') this.natureOfItem = 'Question';
    if (this.item.nature === 'i') this.natureOfItem = 'Information';
    if (this.item.nature === 'r') {this.natureOfItem = language === 'fr' ? 'Réponse' : 'Answer';}
  }

  loadTitleOfChapter(chapter: string, language: string) {
    this.titleOfChapter = this.traductionService.findTitleChapter(chapter, language);
  }

  loadTheme(theme: 'light' | 'dark') {
    this.themeService.applyTheme(theme);
  }

  loadLevel() {
    const item = new Item(this.settingsService.getItem());
    const language = this.settingsService.getLanguage();
    this.levelName = this.traductionService.findLevelName(language, item.level);
  }

  getColorClass(itemNature: string): string {
    return itemNature === 'q' ? 'red' : itemNature === 'r' ? 'green' : 'blue';
  }

  showFooter(): boolean {
    const item = new Item(this.settingsService.getItem());
    return item.nature === 'q' && !this.settingsService.getIsThisAnswerWasDone();
  }

  ngOnDestroy() {
    if (this.settingsSubscription) this.settingsSubscription.unsubscribe();
  }
}
// Pour gérer les textes en anglais et en français il faudra 
// mettre à jour cette procédure.
// To manage french and english texts you will need to update this procedure.
//
// loadComponentEnFr() {
//     let enORfr: string = this.settingsService.getLanguage()
//     this.item = new Item(this.settingsService.getItem());

//     if (this.container) { this.container.clear(); }

//     let component = this.componentLoaderFr.getComponent(this.item.name);//pour l'initialisation
//     if (enORfr === 'en') {component = this.componentLoaderEn.getComponent(this.item.name);}
    
//     if (component && this.container) {this.container.createComponent(component);} 
//     else {console.log(`Aucun composant trouvé pour le nom: ${this.item.name}`);}
    
    
//     // Mise à jour du niveau, nature, titre automatiques
//     const language = this.settingsService.getLanguage();
//     this.loadLevel();
//     this.loadNatureOfItem();
//     this.loadTitleOfChapter(this.item.chapter, language);
//   }