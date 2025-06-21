import { Injectable } from '@angular/core';
// my services
import { SettingsService }  from './settings.service';
import { ConfigFrService }  from './config-fr.service';
import { ConfigEngService } from './config-eng.service';
import { Subscription } from 'rxjs';
// my interfaces
import { ChoiceMenuSide } from '../interfaces/types'
@Injectable({
  providedIn: 'root'
})
export class SideMenuLanguageService {
sideMenu:ChoiceMenuSide[] = [];
  
constructor(
    private configFrService: ConfigFrService,
    private configEngService:ConfigEngService,
    private settingsService: SettingsService // Injection du SettingsService
  ) 
  { // Initialiser le menu latéral à la langue par défaut
    this.sideMenu = this.updateLanguageSideMenu(this.settingsService.getLanguage());
    };

  updateLanguageSideMenu(language: string) {
    if (language === 'fr') {
      this.sideMenu = this.configFrService.sideMenu; 
    } else if (language === 'en') {
      this.sideMenu = this.configEngService.sideMenu; 
    }
  return this.sideMenu}

  getSideMenu() {
    return this.sideMenu;
  }
}
