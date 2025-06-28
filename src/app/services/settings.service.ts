import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Services
import { SettingsFromToDDService } from './settingsFromToDD.service';
import { ConversionTypeService } from './conversion-types.service';
import { GamerResultsService } from './gamer-results.service';
import { GoodResponsesService } from './good-responses.service';

// Interfaces & classes
import { AppSettings, Row145 } from '../interfaces/types';
import { Item } from '../classes/item';
import { DEFAULT_SETTINGS } from '../interfaces/constantes';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private renderer: Renderer2;
  private settings$: BehaviorSubject<AppSettings>;
  public settingsObs$;

  constructor(
    private storage: SettingsFromToDDService,
    rendererFactory: RendererFactory2,
    private cts: ConversionTypeService,
    private gamerResultsService: GamerResultsService,
    private goodResponsesService :GoodResponsesService,
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

  /** GETTERS **/

  getCurrentSettings(): AppSettings {
    return this.settings$.value;
  }

  getItem(): string {
    return this.settings$.value.item;
  }

  getLanguage(): string {
    return this.settings$.value.language;
  }

  getCount(): string {
    return this.settings$.value.count;
  }

  getTheme(): 'light' | 'dark' {
    return this.settings$.value.theme;
  }
  // gives the response of gamer about current question
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
  getFirstTime(): boolean {
    return this.settings$.value.firstTime
  }
  

  /** SETTERS **/

  setItem(newItem: string): void {
    this.updateSettings({ item: newItem });
  }

  setCount(newCount: string): void {
    this.updateSettings({ count: newCount });
  }

  setLanguage(newLanguage: string): void {
    this.updateSettings({ language: newLanguage });
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

  /** Reinitialise count,theme,item* langue si nécessaire **/
  initialiseApp(){
    if (!['1','2','3'].includes(this.settings$.value.count)) { this.setCount('1');}
    else {};
    //
    if(!['en','fr'].includes(this.settings$.value.language)){this.setLanguage('en');}
    else {};
    //
    const item = new Item(this.settings$.value.item);
    if(!['d','c','e'].includes(item.level)){this.setItem('d1_1q');}
    else {};
    if(!['q','r','i'].includes(item.nature)){this.setItem('d1_1q');}
    else {};
    if (!(parseInt(item.chapter,10) >= 1 && parseInt(item.chapter,10) <= 12)) {this.setItem('d1_1q');}
    else {};
    if (!( parseInt(item.question,10)>= 1 &&  parseInt(item.question,10) <= 12)) {this.setItem('d1_1q');}
    else {};
    //
    if(!['dark','light'].includes(this.getTheme())){this.setLanguage('light');}
    else {};
  }
  /** Remise à zéro des résultats */
  setReinitAllResults(): void {
    const current = this.settings$.value;

    const resetSettings: AppSettings = {
      ...DEFAULT_SETTINGS,
      item: current.item,
      count: current.count,
      language: current.language,
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
  private updateSettings(patch: Partial<AppSettings>): void {
    const updated = {
      ...this.settings$.value,
      ...patch
    };
    this.emitAndSave(updated);
  }

  private emitAndSave(updated: AppSettings): void {
    this.settings$.next(updated);
    this.storage.set(updated);
  }
}
