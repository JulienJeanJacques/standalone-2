import { Injectable } from '@angular/core';
import { APP_PARAMS_GOOD_RESPONSES_D, APP_PARAMS_GOOD_RESPONSES_C, APP_PARAMS_GOOD_RESPONSES_E } from '../interfaces/constantes';

@Injectable({
  providedIn: 'root'
})
export class GoodResponsesService {

  constructor() { }

  /**
   * Retourne la valeur correspondant au niveau et à la position spécifiés.
   * @param level 'd', 'c' ou 'e'
   * @param position entre 1 et 144
   * @returns la valeur ou 0 si invalid
   * il ne peut y avoir de 0 dans les bonnes réponses 
   */
  getValue(level: string, position: number): number {
   let value:number = 0;
    if (level === 'd') {value = APP_PARAMS_GOOD_RESPONSES_D[position];};
    if (level === 'c') {value = APP_PARAMS_GOOD_RESPONSES_C[position];};
    if (level === 'e') {value = APP_PARAMS_GOOD_RESPONSES_E[position];};   
    return value
  }
}