import { Injectable } from '@angular/core';
//from my services
import { SettingsService } from './settings.service';
@Injectable({
  providedIn: 'root'
})
export class FindTheNextItem {

  constructor(
    private settingsService:SettingsService) { };
  // !!!!!!!! Attention pour l'instant ne permet pas de changer de chapitre et de niveau
  public ifForward(): string {
    const nameOfCurrentItem:     string = this.settingsService.getItem();
    const natureOfCurrentItem : string  = this.settingsService.getItemNature();
    const currentLanguage:      string  = this.settingsService.getLanguage();
    const questionOfCurrentItem:string  = this.settingsService.getItemQuestion();
    const beforeUnderScore:     string  = this.settingsService.getItemBeforeUnderScore();
    let question: string = '';
    //
    let nameOfForwardItem:      string  = '';
    //
    if      (natureOfCurrentItem ==='q') {  nameOfForwardItem = nameOfCurrentItem.replace("q","r");}
    else if (natureOfCurrentItem ==='r') {  nameOfForwardItem = nameOfCurrentItem.replace("r","i");}
    else { 
      question =  Number( questionOfCurrentItem)+1 +'';
      nameOfForwardItem = beforeUnderScore  + '_' + question  + 'q_' + currentLanguage; //attention on ne peut pas dépasser 12!!!!!!!
    }
    this.settingsService.setItem(nameOfForwardItem); 
    console.log('find-the-next-item.service-ifForward',nameOfForwardItem);
    return  nameOfForwardItem
  }

//'d1_1r_en'
  // !!!!!!!! Attention pour l'instant ne permet pas de changer de chapitre et de niveau
  public ifBackward(nameOfItem:string): string {
    const nameOfCurrentItem:     string = this.settingsService.getItem();
    const natureOfCurrentItem : string  = this.settingsService.getItemNature();
    const currentItem:          string  = this.settingsService.getItem();
    const currentLanguage:      string  = this.settingsService.getLanguage();
    const questionOfCurrentItem:string  = this.settingsService.getItemQuestion();
    const beforeUnderScore:     string  = this.settingsService.getItemBeforeUnderScore();
    let question: string = '';
    //
    let nameOfBackwardItem:string;
    //
    if      (natureOfCurrentItem ==='i') { nameOfBackwardItem = nameOfCurrentItem.replace("i","r");}
    else if (natureOfCurrentItem ==='r') { nameOfBackwardItem = nameOfCurrentItem.replace("i","r");}
    else { 
      question = Number(questionOfCurrentItem)-1 +''; //!!!!il ne faut pas dépasser aller à 0
      nameOfBackwardItem = beforeUnderScore + '_' + question + 'i_' + currentLanguage
      }
    this.settingsService.setItem(nameOfBackwardItem); //mettre dans settings
    console.log('find-the-next-item.service-ifBackward',nameOfBackwardItem);
     return nameOfBackwardItem
  };
}

