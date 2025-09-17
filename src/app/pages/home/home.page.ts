import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule }                  from '@angular/common';
// ionic
import { IonicModule, MenuController }   from '@ionic/angular';
//rxjs
import { Subscription, Observable } from 'rxjs';
import { skip, map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
// my interfaces 
import { AppSettings }                   from '../../interfaces/types';
// my services
import { SettingsService}               from '../../services/settings.service';
import { TraductionService }            from '../../services/traduction.service';
import { ConfigThemeService }           from '../../services/config-theme.service';
import { GestionConfigEngFrService }    from '../../services/gestion-config-eng-fr.service';
import { ItemService }                  from '../../services/item.service';
import { IonButtons } from "@ionic/angular/standalone";
// my components
import { ResponseGoodComponent }         from '../../components/response-good/response-good.component';
import { ResponseFalseComponent }        from '../../components/response-false/response-false.component';
import { ResponseComponent }             from '../../components/response/response.component';

import { FooterAppComponent }            from '../../components/footer-app/footer-app.component';
import { FooterQuestionComponent }       from '../../components/footer-question/footer-question.component';
import { InitialSetupComponent }         from '../../components/initial-setup/initial-setup.component';
// map component
import { ComponentMap }                  from '../../../app/component-map';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ResponseGoodComponent,
    ResponseFalseComponent,
    ResponseComponent,
    FooterAppComponent,
    FooterQuestionComponent,
    InitialSetupComponent,
  ],
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: false })
  container!: ViewContainerRef;

  textAccountName      = '';
  textLevel            = '';
  textNatureOfItem     = '';
  textTitleOfChapter   = '';
  textItemQuestion     = '';

  // public repGoodAndFirstTime  : boolean = false;
  public showInitScreen      = false;
 
  componentMap = ComponentMap;

  private initialized = false;
  private settingsSubscription!: Subscription;

  private currentComponentRef: any;
  private currentItemName: string | null = null;

  // ⚡ Observables réactifs pour les réponses
  showGoodResponse$!:   Observable<boolean>;
  showFalseResponse$!:  Observable<boolean>;
  showResponse$!:       Observable<boolean>;
  showFooter$!:         Observable<boolean>;

  constructor(
    private menuCtrl:                  MenuController,
    private settingsService:           SettingsService,
    private traductionService:         TraductionService,
    private themeService:              ConfigThemeService,
    private gestionConfigEngFrService: GestionConfigEngFrService,
    private itemService:               ItemService,
    private cdr:                       ChangeDetectorRef,
  ) {}

  // ================== ngOnInit ==================
  // async ngOnInit() {
  //   // this.showInitScreen = true;
  //   this.showInitScreen = false;
  //   // this.showInitScreen = this.settingsService.getFirstTime();//est toujours à false sauf la première fois
  //   this.settingsService.initializeApp();

  //   // ⚡ Streams réactifs pour afficher ou non les réponses
  //   this.showGoodResponse$ = this.settingsService.settingsObs$.pipe(
  //     map(() => {
  //       return this.settingsService.getItemNature() === 'r' &&
  //              this.settingsService.getIsFirstPassageForResponse() &&
  //              this.settingsService.getGamerResponseIsGood();
  //     })
  //   );

  //   this.showFalseResponse$ = this.settingsService.settingsObs$.pipe(
  //     map(() => {
  //       const isFalse = this.settingsService.getItemNature() === 'r' &&
  //                       this.settingsService.getIsFirstPassageForResponse() &&
  //                       !this.settingsService.getGamerResponseIsGood();
  //       if (isFalse) {
  //         this.settingsService.setGamerResponseIsDone();
  //       }
  //       return isFalse;
  //     }),
  //   );

  //   // Abonnement aux changements de settings
  //   this.settingsSubscription = this.settingsService.settingsObs$
  //     .pipe(skip(1)) // ignore la première valeur initiale
  //     .subscribe(async (params: AppSettings) => {
  //       if (this.initialized) {
  //         await this.reloadPage(params);
  //       }
  //     });

  //   // Les quatre lignes qui suivent sont là pour éviter que le scroll ne fonctionne pas.
  //   const ionContents = document.querySelectorAll('ion-content');
  //   ionContents.forEach((el) => {
  //     el.addEventListener('touchstart', () => {}, { passive: true });
  //     el.addEventListener('touchmove',  () => {}, { passive: true });
  //   });
  // } 
// ================== ngOnInit ==================
async ngOnInit() {
  // this.showInitScreen = true;
  this.showInitScreen = false;
  // this.showInitScreen = this.settingsService.getFirstTime();// est toujours à false sauf la première fois
  this.settingsService.initializeApp();

  // ⚡ Streams réactifs pour afficher ou non les réponses

  // Réponse correcte au premier passage
  this.showGoodResponse$ = this.settingsService.settingsObs$.pipe(
    map(() => {
      return this.settingsService.getItemNature() === 'r' &&
             this.settingsService.getIsFirstPassageForResponse() &&
             this.settingsService.getGamerResponseIsGood();
    })
  );

  // Réponse fausse au premier passage
  this.showFalseResponse$ = this.settingsService.settingsObs$.pipe(
    map(() => {
      const isFalse = this.settingsService.getItemNature() === 'r' &&
                      this.settingsService.getIsFirstPassageForResponse() &&
                      !this.settingsService.getGamerResponseIsGood();
      if (isFalse) {
        this.settingsService.setGamerResponseIsDone();
      }
      return isFalse;
    })
  );

  // Réponse fausse mais ce n'est PLUS le premier passage
  this.showResponse$ = this.settingsService.settingsObs$.pipe(
    map(() => {
      return this.settingsService.getItemNature() === 'r' &&
             !this.settingsService.getIsFirstPassageForResponse() &&
             !this.settingsService.getGamerResponseIsGood();
    })
  );
  // Affichage du footer question 
  this.showFooter$ = this.settingsService.settingsObs$.pipe(
  map(() => {
    return this.settingsService.getItemNature() === 'q' &&
           !this.settingsService.getIsThisAnswerWasDone();
  })
);
  // Abonnement aux changements de settings
  this.settingsSubscription = this.settingsService.settingsObs$
    .pipe(skip(1)) // ignore la première valeur initiale
    .subscribe(async (params: AppSettings) => {
      if (this.initialized) {
        await this.reloadPage(params);
      }
    });

  // Les quatre lignes qui suivent sont là pour éviter que le scroll ne fonctionne pas.
  const ionContents = document.querySelectorAll('ion-content');
  ionContents.forEach((el) => {
    el.addEventListener('touchstart', () => {}, { passive: true });
    el.addEventListener('touchmove',  () => {}, { passive: true });
  });
}

  // ================== ionViewDidEnter ==================
  async ionViewDidEnter() {
    if (!this.showInitScreen && !this.initialized) {
      await this.initializePage();
    }
  }

  // ================== initializePage ==================
  private async initializePage() {
    this.initialized = true;
    const params = await this.settingsService.initializeApp();
    this.loadPagePresentation(params);
    // Ne pas appeler loadComponent ici : reloadPage via settingsObs$ gère la création
  }

  // ================== reloadPage ==================
  private async reloadPage(params?: AppSettings) {
    const effectiveParams = params ?? this.settingsService.getCurrentSettings();
    // Evite de recréer le composant si l'item n'a pas changé
    if (this.currentItemName === effectiveParams.item) return;
    this.loadPagePresentation(effectiveParams);
    this.loadComponent(effectiveParams.item);
    this.currentItemName = effectiveParams.item;
    this.cdr.detectChanges();
  }

  // ================== loadComponent ==================
  private loadComponent(itemName: string) {
    if (!this.container) {
      console.warn('home.page-loadComponent: container not yet available');
      return;
    }
    if (this.currentComponentRef) {
      this.currentComponentRef.destroy();
      this.currentComponentRef = null;
    }
    this.container.clear();
    const loader = this.componentMap[itemName];
    if (loader) {
      loader()
        .then(cmpType => {
          this.currentComponentRef = this.container.createComponent(cmpType);
        })
        .catch(err => console.error('Erreur import dynamique pour', itemName, err));
    }
  }

  // ================== onSetupFinished ==================
  onSetupFinished() {
    this.showInitScreen = false;
    this.cdr.detectChanges();
    this.initializePage();
  }

  ///////////////////// Présentation de la page Home /////////////////////
  private loadPagePresentation(params: AppSettings) {
    this.loadLanguage(params.item);
    this.loadTheme(params.theme);
    this.loadAccountName(params.item, params.count);
  }

  private loadLanguage(itemName: string) {
    const language = this.itemService.language(itemName);
    const nature = this.itemService.nature(itemName);
    const level = this.itemService.level(itemName);
    const chapter = this.itemService.chapter(itemName);

    this.loadLevel(level, language);
    this.loadNatureOfItem(nature, language);
    this.loadTitleOfChapter(chapter, language);
  }

  private loadAccountName(itemName: string, count: string) {
    const language = this.itemService.language(itemName);
    this.textAccountName = this.gestionConfigEngFrService.getAccountName(language, count);
  }

  private loadNatureOfItem(nature: string, language: string) {
    if      (nature === 'q') this.textNatureOfItem = 'Question';
    else if (nature === 'i') this.textNatureOfItem = 'Information';
    else if (nature === 'r' || language === 'fr') this.textNatureOfItem = 'Réponse';
    else this.textNatureOfItem = 'Answer';
  }

  private loadTitleOfChapter(chapter: string, language: string) {
    this.textTitleOfChapter = this.traductionService.findTitleChapter(chapter, language);
  }

  private loadTheme(theme: 'light' | 'dark') {
    this.themeService.applyTheme(theme);
  }

  private loadLevel(level: string, language: string) {
    this.textLevel = this.traductionService.findLevelName(language, level);
  }

  // Couleur qui dépend de la nature de l'item
  getColorClass(): string {
    const nature = this.itemService.nature(this.settingsService.getItem());
    if (nature === 'q') return 'red';
    if (nature === 'r') return 'green';
    if (nature === 'i') return 'blue';
    return '';
  }

  //  Le pied de page
  // showFooter(): boolean {
  //   return this.settingsService.getItemNature() === 'q' && !this.settingsService.getIsThisAnswerWasDone();
  // }

  // Sortie de l'application
  ngOnDestroy() {
    if (this.settingsSubscription) {
      this.settingsSubscription.unsubscribe();
    }
  }
}

