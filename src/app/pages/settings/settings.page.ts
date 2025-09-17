import { NgStyle } from '@angular/common';
//
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormsModule }           from '@angular/forms';
//ionic
import { NavController }      from '@ionic/angular';
import { IonicModule }        from '@ionic/angular';
import { MenuController }     from '@ionic/angular';
// myServices
import { SettingsService }             from '../../services/settings.service';
import { TraductionService }           from '../../services/traduction.service'
import { ConfigThemeService }          from '../../services/config-theme.service';
import { GestionConfigEngFrService}    from 'src/app/services/gestion-config-eng-fr.service';
import { ItemService }                 from 'src/app/services/item.service';

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
  count:          string = '';
  language:       string = '';
  theme:         'dark'|'light' = 'light';
  item:           string = '';
  //
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
    private itemService:              ItemService,
    private themeService:             ConfigThemeService,
    private menu:                     MenuController,
    private traductionService:        TraductionService,
    private navCtrl:                  NavController,
    private gestionConfigEngFrService:GestionConfigEngFrService,
    private cdr:                      ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadParameters();
    this.initializePage();
  }
//////////////////////////// load parameters ///////////
loadParameters(){
  this.language    = this.settingsService.getLanguage();
     this.theme    = this.settingsService.getTheme();
     this.count    = this.settingsService.getCount();
     this.item     = this.settingsService.getItem();
}
//////////////////////////// show part ////////////////////
showCount(){}
showTheme(){}
showItem(){}
showLanguage(){}
show(){
  this.showTheme();
  this.showCount();
  this.showItem();
  this.showLanguage();
  
}
//////////////////////////////////////////

initializePage()
  { this.loadParameters();
    //
    this.colorTitle = this.gestionConfigEngFrService.getColorTitle('Settings');
    //
    this.textCount1 = this.gestionConfigEngFrService.getAccountName(this.language,'1');  
    this.textCount2 = this.gestionConfigEngFrService.getAccountName(this.language,'2');  
    this.textCount3 = this.gestionConfigEngFrService.getAccountName(this.language,'3'); 
    //
    this.textYourChoice = this.traductionService.findGoodLabel(this.language,'Validez vos choix','validate your choices');
    //
    this.textSettings   = this.traductionService.findGoodLabel(this.language,'Paramètres', 'Settings');
    //
    this.textAccount    = this.traductionService.findGoodLabel(this.language,'Compte',     'Account');
    this.textTheme      = this.traductionService.findGoodLabel(this.language,'Thème',      'Theme');
    this.textLight      = this.traductionService.findGoodLabel(this.language,'lumineux',   'light');
    this.textDark       = this.traductionService.findGoodLabel(this.language,'sombre',     'dark');
    this.textLanguage   = this.traductionService.findGoodLabel(this.language,'Langue',     'Language');
    this.textFrench     = this.traductionService.findGoodLabel(this.language,'Français',   'French');
    this.textEnglish    = this.traductionService.findGoodLabel(this.language,'Anglais',    'English');
    //
    this.textTheme = this.traductionService.findGoodLabel(this.language,'Thème','Theme');
  }

// upDate permette de sauver la nouvelle valeur et de réinitialiser la page
  updateCount(newCount: string) {
    this.settingsService.setCount(newCount);
    this.initializePage();
  }

  updateLanguage(newLanguage:string) {
    const itemNameInUse   = this.settingsService.getItem();
    // il faut changer le composant
    // we must change the component d1_1q_en <--> d1_1q_fr
    let newItemName   = this.itemService.changeLanguage(itemNameInUse,newLanguage); 
    this.settingsService.setItem(newItemName);
    //
    this.initializePage();
    this.cdr.detectChanges();
  } 


  updateTheme(newTheme: "light" | "dark")  {
    // 1. Sauvegarde le thème dans les paramètres
    this.settingsService.setTheme(newTheme);
    // 2. Applique visuellement le thème
    this.themeService.applyTheme(newTheme);
    this.initializePage();
 }
  
  openMenu() {
    this.menu.open('sideMenu');
  }

  goHome() {
  //this.navCtrl.navigateBack('home'); 
  this.navCtrl.navigateRoot('home'); // recharge la page courante
}
}

  
