import { Injectable }     from '@angular/core';
// 
import { ChoiceMenuSide } from '../interfaces/types'
import { Chapter }        from '../interfaces/types'
import { Level }          from '../interfaces/types'
// my types from interfaces
import { Count} from '../interfaces/types'
@Injectable({
  providedIn: 'root',
})
export class ConfigFrService {
   public sideMenu:ChoiceMenuSide[] = [
      {
        title : 'AstroDidact',
        url   : ['/astrodidact','astrodidact'],
        icon  : 'help-circle',
        color : 'darkorange',
      },{
        title : "Mode d'emploi",
        url   : ['/use','use'],
        icon  : 'person',
        color : 'darkorange',
      },
      {
        title : 'Paramètres',
        url   : ['/settings','settings'],
        icon  : 'settings',
        color : 'darkorange',
      },
      {
        title : 'Jouer',
        url   : ['/home','home'],
        icon  : 'person',
        color : 'green',
      },
      {
        title : 'Changer de question',
        url   : ['/change-question','changequestion'],
        icon  : 'swap-horizontal',
        color : 'blue'
      },
      {
        title : 'Résultats',
        url   : ['/results','results'],
        icon  : 'ribbon',
        color : 'red'
      }
    ];
  public appNameChapters: Chapter[] = [
    {num:1,name:'Contemplation du ciel'},
    {num:2,name:'Observation du ciel'},
    {num:3,name:'Les constellations'},
    {num:4,name:'Les mouvements de la Voute Céleste',},
    {num:5,name:'Les mouvements de la Terre'},
    {num:6,name:'Astrométrie'},
    {num:7,name:'Usage du Cherche-étoiles',},
    {num:8,name:'Observation des planètes'},
    {num:9,name:'Observation de la Lune'},
    {num:10,name:'Observation du Soleil'},
    {num:11,name:'Les éclipses'},
    {num:12,name:"Autres objets visibles à l'oeil nu"},
  ];
  public appNameLevels: Level[] = [
     { index:'d',name:'débutant'},
     { index:'c',name:'confirmé'},
     { index:'e',name:'expert'},
  ];

public textForAnwser:string = 'Réponse';


 public appCount: Count[] = [
      {num:'1',name:'Ptolémée'},
      {num:'2',name:'Tychobrahé'},
      {num:'3',name:'Galilé'}
  ];
}
