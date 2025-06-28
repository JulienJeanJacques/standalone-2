import { Injectable } from '@angular/core';
import { IndexLevel } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class ConversionTypeService {

  constructor() { }

//   // → Définition correcte de la méthode dans la classe
//   public strToIndexLevel(s: string): s is IndexLevel {
//     return ['d', 'c', 'e'].includes(s);
//   }
// }

public strToIndexLevel(s: string): IndexLevel {
  const il:IndexLevel = 'd'
  if (['d', 'c', 'e'].includes(s)) {return s as IndexLevel;}
  throw new Error(`Valeur invalide pour IndexLevel: ${s}`);
}
}