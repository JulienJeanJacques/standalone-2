import { Injectable } from '@angular/core';
// from my Classes
import {Item } from '../classes/item'
//from my services
import { SettingsService } from './settings.service';
@Injectable({
  providedIn: 'root'
})
export class FindTheNextItem {

  constructor(
    private settingService:SettingsService) { };
  
  // Méthode ifForward qui utilise la fonction extractSubstring
  public ifForward(nameOfItem:string): string {
    let currentItem = new Item(nameOfItem)
    let nameOfForwardItem:string;
    let question:string;
    if (currentItem.nature ==='q') {
      nameOfForwardItem = currentItem.beforeUnderScore + '_' +  currentItem.question + 'r'
    }
    else if ( currentItem.nature ==='r') {
      nameOfForwardItem =  currentItem.beforeUnderScore + '_' +  currentItem.question + 'i'}
    else { 
      question = Number( currentItem.question)+1 +''; //!!!!il ne faut pas dépasser 12
      nameOfForwardItem = currentItem.beforeUnderScore + '_' + question + 'q'}
      this.settingService.setItem(nameOfForwardItem); //mettre dans settings
      return  nameOfForwardItem
  }
//'d1_1r'
  // Méthode ifBack qui utilise également la fonction extractSubstring
  public ifBackward(nameOfItem:string): string {
    let currentItem = new Item(nameOfItem)
    let nameOfBackwardItem:string;
    let question:string;
    //
    if (currentItem.nature ==='i') {
      nameOfBackwardItem = currentItem.beforeUnderScore+ '_' + currentItem.question + 'r'
    }
    else if (currentItem.nature  ==='r') {
      nameOfBackwardItem = currentItem.beforeUnderScore+ '_' + currentItem.question + 'q'}
    else { 
      question = Number(currentItem.question)-1 +''; //!!!!il ne faut pas dépasser aller à 0
      nameOfBackwardItem = currentItem.beforeUnderScore + '_' + question + 'i'}
    this.settingService.setItem(nameOfBackwardItem); //mettre dans settings
    return nameOfBackwardItem
  };
}

