import { Injectable,OnInit }     from '@angular/core';
//
import { Subscription } from 'rxjs';
//my classes
import { Item } from '../classes/item';
//my services
import { SettingsService} from './settings.service';
//my types
import { Row145 } from '../interfaces/types';
@Injectable({
  providedIn: 'root'
})
export class ResultsService implements OnInit{
private settingsSubscription!: Subscription;
private itemName: string = '1d_1q';
private count   : string = '1';
private language: string = 'en';
private theme   =  "light";
  constructor(
    private settingsService: SettingsService,
  ) { }
ngOnInit(): void {
  //1. On s'abonne au service 
      this.settingsSubscription = this.settingsService.settingsObs$.subscribe(newSettings => {
        // on récupère les paramètres actuels 
    // we load App-params
    this.itemName = this.settingsService.getItem();
    this.count    = this.settingsService.getCount()
    this.language = this.settingsService.getLanguage()
    this.theme    = this.settingsService.getTheme()
    });
  
}
//. ATTENTION À RÉÉCRIRE 
// howManyGoodAnwsers(results: string): number {
//   let numOfGoodAnswers: number = 0; // Initialiser le compteur à 0
//   // Parcours de chaque caractère de la chaîne results
//   for (let i = 0; i < results.length; i++) 
//     {const caractere = results.charAt(i); // Obtenir le caractère à l'index i
//       if (caractere === '1') { numOfGoodAnswers++;} // On vérifie si le caractère est '1'
//   }
// return numOfGoodAnswers; // Retourner le nombre total de '1'
// }


// // Affiche : Nombre de bonnes réponses : 5
percentage(account:string,itemName:string):number{
  let percentage:number = 0;
//   let results: string = this.settingsService.getResults();
//   let item = new Item(itemName);//for the chapter
//   let deb : number = 1;
//   let end : number = 12;
//   deb = 12*Number(item.chapter) - 11;
//   end = 12*Number(item.chapter) + 1;
//   let subResults = results.substring(deb, end + 1);
//    percentage = this.howManyGoodAnwsers(subResults)/12;
//   percentage  = Number(percentage.toFixed(2)); 
return percentage
}


sumRow(row: Row145): number {
  let total = 0;
  for (let i = 0; i < row.length; i++) {
    total += row[i];
  }
  return total;
}

// usage
//const dy: Row145 = this.settings$.getValue().results.getLevel('d');
//console.log('Somme via for :', sumRow(dy));

}

