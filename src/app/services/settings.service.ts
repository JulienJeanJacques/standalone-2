import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Services
import { SettingsFromToDDService }      from './settingsFromToDD.service';
import { ConversionTypeService }        from './conversion-types.service';
import { GamerResultsService }          from './gamer-results.service';
import { GoodResponsesService }         from './good-responses.service';


// Interfaces & classes
import { AppSettings, Row145 }  from '../interfaces/types';
import { Item }                 from '../classes/item';
import { DEFAULT_SETTINGS }     from '../interfaces/constantes';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private renderer:  Renderer2;
  private settings$: BehaviorSubject<AppSettings>;
  public settingsObs$;

  constructor(
    private storage:             SettingsFromToDDService,
    private rendererFactory:     RendererFactory2,
    private cts:                 ConversionTypeService,
    private gamerResultsService: GamerResultsService,
    private goodResponsesService:GoodResponsesService,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    const initialSettings: AppSettings = {
      ...DEFAULT_SETTINGS,
      results: this.gamerResultsService.results
    };

    this.settings$ = new BehaviorSubject<AppSettings>(initialSettings);
    this.settingsObs$ = this.settings$.asObservable();
  }

  /** Chargement des paramètres depuis le stockage */
  async initialize(): Promise<AppSettings> {
    const params = await this.storage.get();
    const updated: AppSettings = {
      ...params,
      results: this.gamerResultsService.results
    };
    this.settings$.next(updated);
    return updated;
  }
  /************************    */
  /** GETTERS **/
  // getters for parameters
  getCurrentSettings(): AppSettings {
    return this.settings$.value;
  }

  getItem(): string {
    return this.settings$.value.item;
  }

  getItemNature():string {
     const item = new Item(this.settings$.value.item);
    return item.nature
  }

  getLanguage(): string {
    const item = new Item(this.settings$.value.item);
    return item.language;
  }

  getCount(): string {
    return this.settings$.value.count;//donne l'index et non le nom!!!!!!
  }

  getTheme(): 'light' | 'dark' {
    return this.settings$.value.theme;
  }

  ////////////////////// gestion des réponses - responses management ////////////////////
  // gives the responses of gamer about current question
  getGamerResponse(): number {
    const { item, results } = this.settings$.value;
    const parsedItem = new Item(item);
    const index = parseInt(parsedItem.question, 10);
    const level = this.cts.strToIndexLevel(parsedItem.level);
    return results?.get?.(level, index) ?? 0;
  }
  //gives all the gamer responses by level
  getGamerResults(): Row145 {
    const { item, results } = this.settings$.value;
    const myItem = new Item(item);
    return results.getLevel(this.cts.strToIndexLevel(myItem.level));
  }
  // said if the anwser is done
  getIsThisAnswerWasDone(): boolean {
    return this.getGamerResponse() !== 0;
  }
  // said if the gamer response is good
  getGamerResponseIsGood(): boolean {
    let result:boolean = false;
    const item = new Item(this.settings$.value.item);
    const gamerResponse = this.getGamerResponse();
    if (Math.abs(gamerResponse) === this.goodResponsesService.getValue(item.level,item.repPosition)) {result = true;};
    return result
  }
  getIsFirstPassageForResponse(){
    console.log('settingsService-getIsFirstPassage',this.getGamerResponse())
    let result:boolean = false;
    if (this.getGamerResponse()<0){result = true};
    return result
  }
  //////////////. Gestion Application
  // Pour savoir si c'est la première fois que l'application est lancée
  getFirstTime(): boolean {
    return this.settings$.value.firstTime
  }
  
  /** *******************************************************************************$ */
  /** SETTERS **/

  setItem(newItem: string): void {
    const updated = { ...this.settings$.value, item: newItem }; // nouvelle référence
    this.emitAndSave(updated);
}

  setCount(newCount: string): void {
    this.updateSettings({ count: newCount });
  }


  setTheme(newTheme: 'light' | 'dark'): void {
    this.updateSettings({ theme: newTheme });
  }

  setFirstTime(newFirstTime:boolean): void {
    this.updateSettings({ firstTime: newFirstTime });
  }

  setGamerResponse(responseValue: number): void {
    const { item, results } = this.settings$.value;
    const parsedItem = new Item(item);
    const index = parseInt(parsedItem.question, 10);
    const level = this.cts.strToIndexLevel(parsedItem.level);
    results.set(level, index, responseValue);
    this.emitAndSave(this.settings$.value); // settings déjà modifié
  }
  setGamerResponseIsDone(){
     let gamerResponse = this.getGamerResponse();
     if ( this.getGamerResponseIsGood()){gamerResponse = Math.abs(gamerResponse)*10}
     else {gamerResponse = Math.abs(gamerResponse) };
    this.setGamerResponse(gamerResponse);
  }

  async initializeApp(): Promise<AppSettings> {
  // Récupérer l'état courant
  let current = this.settings$.value;

  // Vérifier et corriger count
  if (!['1','2','3'].includes(current.count)) {
    this.setCount('1');
    current = { ...current, count: '1' };
  }

  // Vérifier et corriger item
  let item = new Item(current.item);

  if  (!['d','c','e'].includes(item.level)
    || !['q','r','i'].includes(item.nature)
    || !['en','fr'].includes(item.language)
    || !(parseInt(item.chapter, 10) >= 1 && parseInt(item.chapter, 10) <= 12)
    || !(parseInt(item.question,10) >= 1 && parseInt(item.question,10) <= 12)
  ) {
    const defaultItem = 'd1_1q_en';
    this.setItem(defaultItem);
    item = new Item(defaultItem);
    current = { ...current, item: defaultItem };
  }

  // Vérifier et corriger le thème
  if (!['dark','light'].includes(this.getTheme())) {
    this.setTheme('light');
    current = { ...current, theme: 'light' };
  }

  // Construire l'objet AppSettings mis à jour
  const updated: AppSettings = {
    ...current,
    results: this.gamerResultsService.results
  };

  // Diffuser les nouvelles valeurs
  this.settings$.next(updated);

  return updated;
}

  /** Remise à zéro des résultats */
  setReinitAllResults(): void {
    const current = this.settings$.value;
    const resetSettings: AppSettings = {
      ...DEFAULT_SETTINGS,
      item:  current.item,
      count: current.count,
      theme: current.theme,
      results: this.gamerResultsService.results,
      firstTime: current.firstTime,
    };

    this.emitAndSave(resetSettings);
  }

  /** Mise à jour complète */
  setAll(newSettings: AppSettings): void {
    this.emitAndSave(newSettings);
  }

  /** Utilitaire : met à jour settings et sauvegarde */
  updateSettings(patch: Partial<AppSettings>): void {
    const updated = {
      ...this.settings$.value,
      ...patch
    };
    this.emitAndSave(updated);
  }

  emitAndSave(updated: AppSettings): void {
    this.settings$.next(updated);
    this.storage.set(updated);
  }
}
