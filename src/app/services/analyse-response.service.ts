import { Injectable } from '@angular/core';
// my interfaces
import { RESULTS } from '../interfaces/types';
//my services
import { StringsService }  from './strings.service';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})
export class AnalyseResponseService {

  constructor(
    private stringsService:  StringsService,
    private settingsService: SettingsService,
  ) { }


nature(charRep:string): string {
  if(charRep === '-2'){return 'good-second passage'};
  if(charRep === '-1'){return 'good-first passage'};
  if(charRep === '0' ){return 'not done'};
  if(charRep === '1') {return '1:false'};
  if(charRep === '2') {return '2:false'};
  if(charRep === '3') {return '3:false'};
  if(charRep === '4') {return '4:false'};
return ''}
}