import { Injectable }           from '@angular/core';
//my interfaces
import { Count}                 from '../interfaces/types';
import { ChoiceMenuSide }       from '../interfaces/types';
// my Services
import { ConfigEngService }     from '../services/config-eng.service'; // ajustez le chemin si nécessaire
import { ConfigFrService  }     from '../services/config-fr.service';
import { SettingsService  }     from '../services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class GestionConfigEngFrService {
  
  constructor(
    private  configEngService:ConfigEngService ,
    private  configFrService:ConfigFrService,
    private settingsService:SettingsService,
            )
            {
    // Accéder au menu latéral
    const sideMenu = this.configEngService.sideMenu;
  }

  getNameByNum(appCount:Count[],num: string): string {
  const item = appCount.find(c => c.num === num);
  return item ? item.name : ''; // retourne le nom si trouvé, sinon une chaîne vide
 }

  // on récupère le nom du compte
  // we take name of account
  getAccountName(){
    let accountName:  string = 'Galilée';
    const count:      string = this.settingsService.getCount();
    const language:   string = this.settingsService.getLanguage();
    if (language === 'en') {accountName = this.getNameByNum(this.configEngService.appCount,count)};
    if (language === 'fr') {accountName = this.getNameByNum(this.configFrService.appCount,count)};
    return accountName
  }
  //
   getAccountNameOfCount(count:string){
    let accountName:  string = 'Galilée';
    const language:   string = this.settingsService.getLanguage();
    if (language === 'en') {accountName = this.getNameByNum(this.configEngService.appCount,count)};
    if (language === 'fr') {accountName = this.getNameByNum(this.configFrService.appCount,count)};
    return accountName
  }
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

  
