import { Injectable }     from '@angular/core';
// my services
import { SettingsService } from './settings.service';
// my types
import { AppSettings }     from '../interfaces/types';
@Injectable({
  providedIn: 'root'
})
export class SeeInMyConsoleService {

  constructor( private settingsService: SettingsService,) { 
   
  }

params(where:string){

  let allParams : AppSettings = this.settingsService.getCurrentSettings();
  let isDone = this.settingsService.getIsThisAnserWasDone();
    console.log(where)
    console.log('language: '    ,allParams.language);
    console.log('item: '        ,allParams.item);
    console.log('thème: '       ,allParams.theme);
    console.log('compte: '      ,allParams.count);
    console.log('resultsOne'    ,allParams.resultsOne);
    console.log('resultsTwo'    ,allParams.resultsTwo);
    console.log('resultsThree'  ,allParams.resultsThree);
    console.log('isDone',isDone);
}
}
