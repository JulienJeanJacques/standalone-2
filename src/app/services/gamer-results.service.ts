// import { Injectable } from '@angular/core';
// import { Results,IndexLevel, Row145 } from '../interfaces/types';

// @Injectable({
//   providedIn: 'root'
// })
// export class GamerResultsService {
  
// // const allD = this.gamerResultsService.results.getLevel('d');
// constructor() {
//     // expose explicitly pour plus de clarté : .get fait la même chose que fn()
//     this.fn.get = (levels, index) => this.data[levels][index];
//     this.fn.set = (levels, index, value) => {this.data[levels][index] = value;};
//     this.fn.set = (l, i, v) => { this.data[l][i] = v; };
//     this.fn.getLevel = (l) => this.data[l];
//   }

//   private data: Record<IndexLevel, Row145> = {
//     d: Array(145).fill(0) as Row145,
//     c: Array(145).fill(0) as Row145,
//     e: Array(145).fill(0) as Row145,
//   };

//   private fn= ((indexLevel: IndexLevel, index: number): number => {
//     return this.data[indexLevel][index];
//   }) as Results;

//   public get results(): Results {
//     return this.fn;
//   };

  // public response(level: string, position: number): number  {
  //   console.log('gamer-result-service-response-level',level);
  //   console.log('gamer-result-service-response-level',position);
  //   const arrayLevel = this.data[level as IndexLevel];
  //   const response   = arrayLevel[position];
  //   console.log('gamer-result-service-response-level',response);
  //   return response
  // }
//}
import { Injectable } from '@angular/core';
import { Results, IndexLevel, Row145 } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class GamerResultsService {

  // Stockage interne : 3 lignes de 145 valeurs numériques
  private data: Record<IndexLevel, Row145> = {
    d: Array(145).fill(0) as Row145,
    c: Array(145).fill(0) as Row145,
    e: Array(145).fill(0) as Row145,
  };

  // Fonction de base qui sert aussi d'objet API
  private fn = ((level: IndexLevel, index: number): number => {
    return this.data[level][index];
  }) as Results;

  constructor() {
    // On enrichit la fonction avec des méthodes utilitaires
    this.fn.get = (level, index) => this.data[level][index];
    this.fn.set = (level, index, value) => { this.data[level][index] = value; };
    this.fn.getLevel = (level) => this.data[level];
  }

  // Getter public pour exposer l’API
  public get results(): Results {
    return this.fn;
  }
}

// to use it
// Lire avec appel direct
//const val1 = this.gamerResultsService.results('d', 5);
// Lire avec get()
//const val2 = this.gamerResultsService.results.get('c', 10);
// Écrire avec set()
// this.gamerResultsService.results.set('e', 20, 42);
// Récupérer toute une ligne
//const row = this.gamerResultsService.results.getLevel('d');
