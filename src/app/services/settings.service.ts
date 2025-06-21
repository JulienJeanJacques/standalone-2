import { Injectable } from '@angular/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

//
import { BehaviorSubject } from 'rxjs';
//my services
import { SettingsFromToDDService } from './settingsFromToDD.service';
import { StringsService }          from './strings.service';
//my interfaces
import { AppSettings,DEFAULT_SETTINGS }  from '../interfaces/types';
// my classes
import { Item}  from '../classes/item'

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private renderer: Renderer2;
  private darkThemeClass  = 'dark-theme';
  private lightThemeClass = 'light-theme';

  // Définir une configuration par défaut
  private static defaultSettings = DEFAULT_SETTINGS;

  // BehaviorSubject qui contient la configuration actuelle
  private settings$   = new BehaviorSubject<AppSettings>(DEFAULT_SETTINGS);
  public settingsObs$ = this.settings$.asObservable();

  constructor(
    private storage:        SettingsFromToDDService,
    private stringsService: StringsService,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

  // initialize() : charge depuis disque, met à jour BehaviorSubject, retourne AppSettings
  async initialize(): Promise<AppSettings> {
    const params = await this.storage.get(); // récupère depuis le disque
    this.settings$.next(params);              // met à jour tous ceux qui écoutent
    return params;                            // retourne pour autres usages
  }

  ///////////////////////////////////// GET ////////////////////////////////////////////
  // Récupère la configuration courante
  getCurrentSettings(): AppSettings {
      return this.settings$.value;
    }
  // récupère chacun des champs de la configuration courante
  getItem(): string {
    return this.settings$.value.item;
  }
  getLanguage(): string {
    return this.settings$.value.language;
  }
  getCount(): string {
    return this.settings$.value.count;
  }
  getTheme():  "light" | "dark"{
    return this.settings$.value.theme;
  }

  getResults(): string {
    let count:string = this.settings$.value.count;
    let itemName: string = this.settings$.value.item;
    let item = new Item(itemName);
    let results:string = '';
    if (count === '1' && item.level === 'd') {results = this.settings$.value.resultsOne.d};
    if (count === '1' && item.level === 'c') {results = this.settings$.value.resultsOne.c};
    if (count === '1' && item.level === 'e') {results = this.settings$.value.resultsOne.e};
    if (count === '2' && item.level === 'd') {results = this.settings$.value.resultsTwo.d};
    if (count === '2' && item.level === 'c') {results = this.settings$.value.resultsTwo.c};
    if (count === '2' && item.level === 'e') {results = this.settings$.value.resultsTwo.e};
    if (count === '3' && item.level === 'd') {results = this.settings$.value.resultsThree.d};
    if (count === '3' && item.level === 'c') {results = this.settings$.value.resultsThree.c};
    if (count === '3' && item.level === 'e') {results = this.settings$.value.resultsThree.e};
    return results
  }

  getPositionOfResponseInResult()
 {  let nameOfItem = this.settings$.value.item;
    let item = new Item(nameOfItem);
    let q = parseInt(item.question,10);
    let c = parseInt(item.chapter,10);
    return q*c
 }

 getResponseInResult()
 { return  this.stringsService.getNthCharacter(this.getResults(),this.getPositionOfResponseInResult());
 }

 getIsThisAnserWasDone(   
    ){let charRep:string;
      charRep = this.getResponseInResult()
      return !(charRep == '0');
    }
    
// getForThisAnswerIsFirstPassage():boolean{
//   let firsTime:boolean = false;
//   if (this.getResponseInResult()==='-1' || this.getResponseInResult()==='1'  ) {firsTime = true}
// return firsTime}

///////////////////////////////////////////////////// SET 
// pour enregistrer les réponses on dispose d'un caractère.
// On note 1,2,3 ou 4 la réponse faite si elle est fausse
// -1 si elle est juste
// 0 si elle n'a pas été faite

// pour modifier l'observable le on enregistre sur le disque
  setItem(newItem: string): void {
    const currentSettings = this.settings$.value; // Récupère la configuration actuelle
    const updatedSettings: AppSettings = {
      ...currentSettings,      // garde tous les autres champs inchangés
      item: newItem            // met à jour le champ item
    };
    this.settings$.next(updatedSettings); // émet la nouvelle configuration
    this.storage.set(updatedSettings)
  }

  setCount(newCount: string): void {
    const currentSettings = this.settings$.value; // Récupère la configuration actuelle
    const updatedSettings: AppSettings = {
      ...currentSettings,        // garde tous les autres champs inchangés
      count: newCount            // met à jour le champ item
    };
    this.settings$.next(updatedSettings); // émet la nouvelle configuration
    this.storage.set(updatedSettings) //sauve sur le disque
  }
  setLanguage(newLanguage: string): void {
    const currentSettings = this.settings$.value; // Récupère la configuration actuelle
    const updatedSettings: AppSettings = {
      ...currentSettings,        // garde tous les autres champs inchangés
      language: newLanguage           // met à jour le champ item
    };
    this.settings$.next(updatedSettings); // émet la nouvelle configuration
    this.storage.set(updatedSettings) //sauve sur le disque
  }

  setTheme(newTheme:  "light" | "dark"): void {
    const currentSettings = this.settings$.value; // Récupère la configuration actuelle
    const updatedSettings: AppSettings = {
      ...currentSettings,        // garde tous les autres champs inchangés
      theme: newTheme           // met à jour le champ item
    };
    this.settings$.next(updatedSettings); // émet la nouvelle configuration
    this.storage.set(updatedSettings) //sauve sur le disque
  }

  setResults(responseValue:string) {
      // to recover  actual configuration
      let currentSettings  = this.settings$.value;
      let updatedSettings  = this.settings$.value;
      //
      let count:string     = this.settings$.value.count;
      let itemName: string = this.settings$.value.item;
      let item             = new Item(itemName);
      let position: number = this.getPositionOfResponseInResult();
      //
      if (count === '1' && item.level === 'd') {
        console.log('settings.service.ts-setResults,responseValue',responseValue,'***',responseValue.length);
        console.log('settings.service.ts-setResults-1-*******************************',updatedSettings.resultsOne.d.length,'$$$$$',currentSettings.resultsOne.d);
        updatedSettings.resultsOne.d   = this.stringsService.replaceCharAtPosition(currentSettings.resultsOne.d,position,responseValue);
        console.log('settings.service.ts-setResults-2-*******************************',updatedSettings.resultsOne.d.length,'$$$$$',updatedSettings.resultsOne.d)
      };
      if (count === '1' && item.level === 'c') {updatedSettings.resultsOne.c   = this.stringsService.replaceCharAtPosition(currentSettings.resultsOne.c,position,responseValue)};
      if (count === '1' && item.level === 'e') {updatedSettings.resultsOne.e   = this.stringsService.replaceCharAtPosition(currentSettings.resultsOne.e,position,responseValue)};
      if (count === '2' && item.level === 'd') {updatedSettings.resultsTwo.d   = this.stringsService.replaceCharAtPosition(currentSettings.resultsTwo.d,position,responseValue)};
      if (count === '2' && item.level === 'c') {updatedSettings.resultsTwo.c   = this.stringsService.replaceCharAtPosition(currentSettings.resultsTwo.c,position,responseValue)};
      if (count === '2' && item.level === 'e') {updatedSettings.resultsTwo.e   = this.stringsService.replaceCharAtPosition(currentSettings.resultsTwo.e,position,responseValue)};
      if (count === '3' && item.level === 'd') {updatedSettings.resultsThree.d = this.stringsService.replaceCharAtPosition(currentSettings.resultsThree.d,position,responseValue)};
      if (count === '3' && item.level === 'c') {updatedSettings.resultsThree.c = this.stringsService.replaceCharAtPosition(currentSettings.resultsThree.c,position,responseValue)};
      if (count === '3' && item.level === 'e') {updatedSettings.resultsThree.e = this.stringsService.replaceCharAtPosition(currentSettings.resultsThree.e,position,responseValue)};
      // emit the new configuration
      this.settings$.next(updatedSettings);
      this.storage.set(updatedSettings) //save on disk
    }
  

  setAll(newSettings:AppSettings){
    this.storage.set(newSettings)
  }

  setModifyResponseAfterFirstPassage(){
    let newValue:string = '';
     newValue = this.getResponseInResult();
     if (newValue === '1')  {newValue = '2'};
     if (newValue === '-1') {newValue = '-2'};
     this.setResponse(newValue);
  }

  // enregistre la réponse  dans les résultats
  setResponse(value:string){
    console.log('settingsService-setResponse,value',value);
    const resultsBefore = this.getResults();
    console.log('settingsService-setResponse, resultBefore',resultsBefore.length,'**',resultsBefore);
    const position:number = this.getPositionOfResponseInResult(); 
    console.log('settingsService-setResponse , position',position);
    const resultsAfter = this.stringsService.replaceCharAtPosition(resultsBefore,position,value);
    console.log('settingsService-setResponse , after',resultsAfter.length,'***',resultsAfter);
    this.setResults(resultsAfter);
  }

  // réinitialise la réponse à non faite
  setReinitTheResponseForTheQuestionInUse()
  {this.setResults('0');
  }

  //réinitialise tous les résultats 
  setReinitAllResults(){
    let newSettings: AppSettings = DEFAULT_SETTINGS;
    newSettings.count         = this.getCount();
    newSettings.item          = this.getItem();
    newSettings.language      = this.getLanguage();
    this.storage.set(newSettings);
   }
}