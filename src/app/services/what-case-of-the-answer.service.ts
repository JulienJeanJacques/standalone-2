import { Injectable } from '@angular/core';
// my services
import { SettingsService}      from '../services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class WhatCaseOfTheAnswerService {

  constructor(
    private settingsService:           SettingsService,
  ) { }


caseIsGoodResponse(): boolean { 
  return this.settingsService.getItemNature() === 'r' && this.settingsService.getIsFirstPassageForResponse()  && this.settingsService.getGamerResponseIsGoodForFirstTime();
}

caseIsFalseResponse():boolean {
  return  this.settingsService.getItemNature() === 'r' && this.settingsService.getIsFirstPassageForResponse()  && !this.settingsService.getGamerResponseIsGoodForFirstTime();
}

caseIsResponse():     boolean {
  let result:boolean = true;
  let notFirstTimeAndRight =  this.settingsService.getItemNature() === 'r' && !this.settingsService.getIsFirstPassageForResponse() && this.settingsService.getGamerResponseIsGoodForAllTime();
  let notFirstTimeAndFalse =  this.settingsService.getItemNature() === 'r' && !this.settingsService.getIsFirstPassageForResponse() && !this.settingsService.getGamerResponseIsGoodForAllTime();
  return notFirstTimeAndFalse || notFirstTimeAndRight 
}

}