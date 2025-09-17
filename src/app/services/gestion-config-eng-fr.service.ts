import { Injectable }           from '@angular/core';
//my interfaces
import { Count}                 from '../interfaces/types';
import { ChoiceMenuSide }       from '../interfaces/types';
// my Services
import { ConfigEngService }     from '../services/config-eng.service'; // ajustez le chemin si nécessaire
import { ConfigFrService  }     from '../services/config-fr.service';
import { SettingsService  }     from '../services/settings.service';
import { ItemService     }      from './item.service'; 
@Injectable({
  providedIn: 'root'
})
export class GestionConfigEngFrService {
  
  constructor(
    private  configEngService:ConfigEngService ,
    private  configFrService: ConfigFrService,
    private settingsService:  SettingsService,
    private itemService:      ItemService,
            )
            {
    // Accéder au menu latéral
    const sideMenu = this.configEngService.sideMenu;
  }

  getNameByNum(appCount:Count[],num: string): string {
  const item = appCount.find(c => c.num === num);
  return item ? item.name : ''; // retourne le nom si trouvé, sinon une chaîne vide
 }

  getNumByName(appCount: Count[],name: string): string {
    const item = appCount.find(c => c.name === name);
    return item ? item.num : ''; // retourne le num si trouvé, sinon une chaîne vide
  }

  // on récupère le nom du compte
  // we take name of account
  getAccountName(language:string,indexCount:string){
    let accountName:  string = 'Galilée';
    if (language === 'en') {accountName = this.getNameByNum(this.configEngService.appCount,indexCount)};
    if (language === 'fr') {accountName = this.getNameByNum(this.configFrService.appCount,indexCount)};
    return accountName
  }
  //
  getAccountIndex(language:string, nameCount:string){
    let accountIndex: string = '0';
    if (language === 'en') {accountIndex = this.getNumByName(this.configEngService.appCount,nameCount)};
    if (language === 'fr') {accountIndex = this.getNumByName(this.configFrService.appCount, nameCount)};
    return accountIndex
  }
  //
  // Vous pouvez créer une méthode pour récupérer ou manipuler le menu
  getSideMenu(): ChoiceMenuSide[] {
    return this.configEngService.sideMenu;
  }
// à partie de config-eng.service car c'est pareil pour config-fr.service
// from config-eng.service
  getColorTitle(title: string): string {
    let colorTitle: string = 'white'; // couleur par défaut
    const item = this.configEngService.sideMenu.find(item => item.title === title);
    if (item) {
      colorTitle = item.color;
    }
    return colorTitle;
  }
}

  
