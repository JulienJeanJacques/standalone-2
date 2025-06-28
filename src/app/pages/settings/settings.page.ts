import { NgStyle } from '@angular/common';
//
import { Component, OnInit} from '@angular/core';
import { FormsModule }           from '@angular/forms';
//ionic
import { NavController }      from '@ionic/angular';
import { IonicModule }        from '@ionic/angular';
import { MenuController }     from '@ionic/angular';
// myServices
import { SettingsService }   from '../../services/settings.service';
import { TraductionService } from '../../services/traduction.service'
import { ConfigThemeService } from '../../services/config-theme.service';
import { GestionConfigEngFrService}    from 'src/app/services/gestion-config-eng-fr.service';
// my classes
import { Item }         from '../../classes/item'
@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [
    IonicModule,
    FormsModule,
    NgStyle,]
})
export class SettingsPage implements OnInit {
  count:          string = '1';
  nameItem:       string = 'd1_1q';
  item = new Item(this.nameItem);
  language:       string = 'fr';
  theme:          string = 'light';
  textAccount:    string = 'Account';
  textSettings:   string = 'Settings';
  textYourChoice: string = 'validate your choices';
  textTheme:      string = 'Theme';
  textLight:      string = 'light';
  textDark:       string = 'dark';
  textLanguage:   string = 'Language';
  textFrench:     string = 'French';
  textEnglish:    string = 'English';
  textCount1:     string = 'Galilée';
  textCount2:     string = 'Galilée';
  textCount3:     string = 'Galilée';
  colorTitle:     string = 'white';
  //
  public refreshFlag: boolean = true;
  constructor(
    private settingsService:          SettingsService,
    private themeService:             ConfigThemeService,
    private menu:                     MenuController,
    private traductionService:        TraductionService,
    private navCtrl:                  NavController,
    private gestionConfigEngFrService:GestionConfigEngFrService,
  ) {
}
  ngOnInit() {
      // Réagir à la mise à jour de la configuration
    //
    this.colorTitle    = this.gestionConfigEngFrService.getColorTitle('Settings');
    this.textCount1    = this.gestionConfigEngFrService.getAccountNameOfCount('1');  
    this.textCount2    = this.gestionConfigEngFrService.getAccountNameOfCount('2');  
    this.textCount3    = this.gestionConfigEngFrService.getAccountNameOfCount('3'); 
    //
    this.updateCount   (this.settingsService.getCount()); 
    this.updateLanguage(this.settingsService.getLanguage()); 
    this.updateItem    (this.settingsService.getItem()); 
    this.updateTheme   (this.settingsService.getTheme()); 
    this.updateCount   (this.settingsService.getCount()); 
  }

  updateCount(newCount: string) {
    this.settingsService.setCount(newCount);
  }

  updateLanguage(newLanguage: string) {
    this.textYourChoice = this.traductionService.findGoodLabel(newLanguage,'Validez vos choix','validate your choices');
    this.textSettings   = this.traductionService.findGoodLabel(newLanguage,'Paramètres','Settings');
    this.textAccount    = this.traductionService.findGoodLabel(newLanguage,'Compte','Account');
    this.textTheme      = this.traductionService.findGoodLabel(newLanguage,'Thème','Theme');
    this.textLight      = this.traductionService.findGoodLabel(newLanguage,'lumineux','light');
    this.textDark       = this.traductionService.findGoodLabel(newLanguage,'sombre','dark');
    this.textLanguage   = this.traductionService.findGoodLabel(newLanguage,'Langue','Language');
    this.textFrench     = this.traductionService.findGoodLabel(newLanguage,'Français','French');
    this.textEnglish    = this.traductionService.findGoodLabel(newLanguage,'Anglais','English');
    this.settingsService.setLanguage(newLanguage);
    this.textCount1    =  this.gestionConfigEngFrService.getAccountNameOfCount('1'); 
    this.textCount2    =  this.gestionConfigEngFrService.getAccountNameOfCount('2'); 
    this.textCount3    =  this.gestionConfigEngFrService.getAccountNameOfCount('3'); 
    this.language      =  this.settingsService.getLanguage();
  }

  updateItem(newItem: string) {
    this.settingsService.setItem(newItem);
  }

  updateTheme(newTheme: "light" | "dark")  {
    let newLanguage = this.settingsService.getLanguage()
    this.textTheme = this.traductionService.findGoodLabel(newLanguage,'Thème','Theme');
    // 1. Sauvegarde le thème dans les paramètres
    this.settingsService.setTheme(newTheme);
    // 2. Applique visuellement le thème
    this.themeService.applyTheme(newTheme);
 }
  
  openMenu() {
    this.menu.open('sideMenu');
  }

  goHome() {
  //this.navCtrl.navigateBack('home'); 
  this.navCtrl.navigateRoot('home'); // recharge la page courante
}
}

  
