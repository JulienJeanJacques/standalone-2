import { Injectable }     from '@angular/core';
// my types from interfaces
import { ChoiceMenuSide } from '../interfaces/types';
import { Chapter }        from '../interfaces/types';
import { Level }          from '../interfaces/types';
import { Count}           from '../interfaces/types'

@Injectable({
  providedIn: 'root',
})
export class ConfigEngService {

  public sideMenu:ChoiceMenuSide[] = [
    {
      title : 'AstroDidact',
      url   : ['/astrodidact','astrodidact'],
      icon  : 'help-circle',
      color : 'darkorange',
    },
    {
      title : "How use it",
      url   : ['/use','use'],
      icon  : 'person',
      color : 'darkorange',
    },
    {
      title : 'Settings',
      url   : ['/settings','settings'],
      icon  : 'settings',
      color : 'darkorange',
    },
    {
      title : 'Play',
      url   : ['/home','home'],
      icon  : 'person',
      color : 'green',
    },
    {
      title : 'Change question',
      url   : ['/change-question','changequestion'],
      icon  : 'swap-horizontal',
      color : 'blue'
    },
    {
      title : 'Your results',
      url   : ['/results','results'],
      icon  : 'ribbon',
      color : 'red'
    }
  ];
  public appNameChapters: Chapter[] = [
    {num:1,name:'Contemplation of the sky'},
    {num:2,name:'Sky observation'},
    {num:3,name:'Constellations'},
    {num:4,name:'Movements of the Celestial Vault'},
    {num:5,name:'Earth movements'},
    {num:6,name:'Astrométry'},
    {num:7,name:'Use of the Starseeker'},
    {num:8,name:'Observation of planets'},
    {num:9,name:'Moon observation'},
    {num:10,name:'Sun observation'},
    {num:11,name:'Eclipses'},
    {num:12,name:'Other objects visible to the naked eye'},
  ]
  
  public appNameLevels: Level[] = [
    { index:'d',name:'beginner'},
    { index:'c',name:'confirmed'},
    { index:'e',name:'expert'},
 ];
 
public textForAnwser: string = 'Anwser :'

 public appCount: Count[] = [
      {num:'1',name:'Ptolemy'},
      {num:'2',name:'Tycho Brah'},
      {num:'3',name:'Galilee'}
  ];

}