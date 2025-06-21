import { Component, inject, OnInit, OnDestroy, ViewChild, ViewContainerRef,Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
//
import { Subscription } from 'rxjs';
//
import { MenuController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
//
import { App } from '@capacitor/app';
// my classes
import { Item } from '../../classes/item';
// my Services
import { ComponentLoaderService }   from '../../services/component-loader.service'
import { SettingsService }           from '../../services/settings.service';
import { ConfigThemeService }        from '../../services/config-theme.service';
import { SeeInMyConsoleService }     from 'src/app/services/seeInMyConsole.service';
import { TraductionService  }        from '../../services/traduction.service';
import { GestionConfigEngFrService } from 'src/app/services/gestion-config-eng-fr.service';
//my components
import { ResponseComponent } from 'src/app/components/response/response.component';
import { FooterAppComponent}          from '../../components/footer-app/footer-app.component';
import { FooterQuestionComponent }    from '../../components/footer-question/footer-question.component';
import { AnimationConfettisComponent } from '../../components/animation-confettis/animation-confettis.component';
import { AnimationMedalComponent }    from 'src/app/components/animation-medal/animation-medal.component';
import { AnimationBalloonsComponent } from 'src/app/components/animation-balloons/animation-ballons.component';
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
],
})

export class HomePage implements OnInit,OnDestroy {
  
  private settingsSubscription!: Subscription;
 
  componentName: string = 'd1_1q'; // Remplacez par le nom du composant que vous souhaitez charger
  item = new Item('d1_1q')
  accountName:     string = 'Galilé';
  levelName:       string = 'débutant';
  natureOfItem:    string = 'Question :';
  titleOfChapter:  string = 'Titre du chapitre';
  showAnimation:  boolean = false;
  currentAnimationComponent: Type<any> | null = null;
  
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true})    container!: ViewContainerRef;
  @ViewChild('dynamicAnimationContainer', { read: ViewContainerRef, static: false })  animationContainer!: ViewContainerRef;
  animations: Type<any>[] = [AnimationBalloonsComponent, AnimationConfettisComponent];
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private menuCtrl:                               MenuController,
    private componentLoader:                        ComponentLoaderService,
    private settingsService:                        SettingsService,
    private traductionService:                      TraductionService,
    private themeService:                           ConfigThemeService,
    private seeInMyConsole:                         SeeInMyConsoleService,
    private gestionConfigEngFrService :             GestionConfigEngFrService,
  ) {}

async ngOnInit() {
  // 1. On s'abonne au service 
      this.settingsSubscription = this.settingsService.settingsObs$.subscribe(newSettings => {
      // Réagir à la mise à jour de la configuration
      this.loadComponent();
      this.loadLanguage();
      this.loadTheme(newSettings.theme);
      this.accountName = this.gestionConfigEngFrService.getAccountName() ;
    });
  // 2. Appel à l'initialisation qui charge les paramètres depuis le disque
      const params = await this.settingsService.initialize();
  // 3. Appliquer ces paramètres avec vos méthodes
      this.loadComponent();
      this.loadLanguage();
      this.loadTheme(params.theme);
      this.accountName = this.gestionConfigEngFrService.getAccountName() ;
      //4. pour le side-menu
      this.menuCtrl.isEnabled('sideMenu').then(enabled => {
        if (!enabled) {
          this.menuCtrl.enable(true, 'sideMenu'); // Active le menu si besoin
        }
      //5.reinitialisation of first question to test
      //this.settingsService.setReinitTheResponseForTheQuestionInUse();
      this.settingsService.setReinitAllResults();
      this.seeInMyConsole.params('home.page.ts-ngOnInit-$$$$$$$$$$$$$$$');
      });
      //6.animation
      console.log('home.page.ts',this.showAnimation);
      this.showAnimation = (this.item.nature === 'r' && this.settingsService.getResponseInResult() === '-1');
      console.log('home.page.ts',this.showAnimation);
      this.throwAnimation(this.showAnimation) 
  }

loadComponent() {
    this.item = new Item(this.settingsService.getItem());
    if (this.container) { this.container.clear(); }
    const component = this.componentLoader.getComponent(this.item.name);
    if (component && this.container) {
      this.container.createComponent(component);
    } else {
      console.log(`Aucun composant trouvé pour le nom: ${this.item.name}`);
    }
    // Mise à jour du niveau, nature, titre automatiques
    const language = this.settingsService.getLanguage();
    this.loadLevel();
    this.loadNatureOfItem();
    this.loadTitleOfChapter(this.item.chapter, language);
  }

loadLanguage() {
    const language = this.settingsService.getLanguage();
    const itemName = this.settingsService.getItem();
    this.loadLevel();
    this.loadNatureOfItem();
    this.loadTitleOfChapter(this.item.chapter, language);
  }
  
  loadNatureOfItem() {
  this.item = new Item(this.settingsService.getItem());
  const language   = this.settingsService.getLanguage();
   if (this.item.nature === 'q') { this.natureOfItem = 'Question'; }
   if (this.item.nature === 'i') { this.natureOfItem = 'Information'; }
   if (this.item.nature === 'r') {
      if (language === 'fr') { this.natureOfItem = 'Réponse'; }
      if (language === 'en') { this.natureOfItem = 'Answer'; }
    }
}

  loadTitleOfChapter(chapter: string, language: string){
    this.titleOfChapter = this.traductionService.findTitleChapter(chapter, language);
  }

  loadTheme(theme: 'light' | 'dark'){
    this.themeService.applyTheme(theme)// Ajoutez ici si besoin
  }

  loadLevel() {
  const itemName = this.settingsService.getItem();     // récupère le nom de l'item
  const language = this.settingsService.getLanguage(); // récupère la langue
  const item = new Item(itemName);
  this.levelName = this.traductionService.findLevelName(language, item.level);
}

getColorClass(itemNature: string): string {
    let color:string = '';
    if (itemNature === 'q') {color = 'red'};
    if (itemNature === 'r') {color = 'green'};
    if (itemNature === 'i') {color = 'blue'};
    return color
  }
  showFooter():boolean{
    const nameOfItem = this.settingsService.getItem();
    const item = new Item(nameOfItem);
    let show:boolean = false;
    if (item.nature === 'q' && !this.settingsService.getIsThisAnserWasDone()){ show = true};
  return show}

throwAnimation(permission:boolean) {
    if (permission) {
      // Choix aléatoire
      const randomIndex = Math.floor(Math.random() * this.animations.length);
      this.currentAnimationComponent = this.animations[randomIndex];
    }
  }
  ngOnDestroy() {
    if (this.settingsSubscription) { this.settingsSubscription.unsubscribe();
    }
  }

}


