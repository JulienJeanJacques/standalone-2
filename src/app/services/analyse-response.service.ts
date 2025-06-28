import { Injectable } from '@angular/core';
// my classes
import { Item } from '../classes/item';
// my interfaces
import { APP_PARAMS_GOOD_RESPONSES_D } from '../interfaces/constantes';
import { APP_PARAMS_GOOD_RESPONSES_C } from '../interfaces/constantes';
import { APP_PARAMS_GOOD_RESPONSES_E } from '../interfaces/constantes';
// my types
import { Row145 } from '../interfaces/types'
//my services
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class AnalyseResponseService {

  constructor(
     private settingsService: SettingsService,
  ) { 
   
  }

// reçoit le choix validé par le joueur, 
// ce choix est 1,2,3 ou 4.
// compare à la bonne réponse
// Si la réponse est bonne, il enregistre -choix.
// sinon il enregistre choix.
nature(choice:number): number {
  let result: number;
  const nameOfItem = this.settingsService.getItem();
  const item = new Item(nameOfItem);
  const level = item.level;
  let goodResponses: Row145 = APP_PARAMS_GOOD_RESPONSES_D;
  switch (level) {
      case 'd': { goodResponses = APP_PARAMS_GOOD_RESPONSES_D; break;}
      case 'c': { goodResponses = APP_PARAMS_GOOD_RESPONSES_C; break;}
      case 'e': { goodResponses = APP_PARAMS_GOOD_RESPONSES_E;break;}
      default: { console.error(`Valeur inattendue : ${level}`);break;}
    }
    if (choice === goodResponses[item.repPosition]) {result = - choice}
    else {result = choice}
  return result}
  }
