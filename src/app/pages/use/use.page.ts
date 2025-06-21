import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
//
import { NavController }  from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
//my services
import { SettingsService }          from 'src/app/services/settings.service';
import { TraductionService }        from 'src/app/services/traduction.service';
import { GestionConfigEngFrService } from 'src/app/services/gestion-config-eng-fr.service';
//my components
import { HowToUseEnComponent } from 'src/app/components/how-to-use-en/how-to-use-en.component';
import { HowToUseFrComponent } from 'src/app/components/how-to-use-fr/how-to-use-fr.component';
@Component({
  selector: 'app-use',
  standalone: true,
  templateUrl: './use.page.html',
  styleUrls: ['./use.page.scss'],
  imports: [
    IonicModule,
    NgStyle,
    NgIf,
    HowToUseEnComponent,
    HowToUseFrComponent,
],
})
export class UsePage implements OnInit {
  theme:      string = 'light';
  textTitle:  string = 'How To Use'; 
  textGoHome: string = 'Go to play';
  language:   string  = 'en';
  colorTitle: string = 'white';
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private settingsService: SettingsService,
    private traductionService: TraductionService,
    private gestionConfigEngFrService:GestionConfigEngFrService ,
  ) { }

  ngOnInit() {
//mon récupère les paramètres actuels 
    this.theme    = this.settingsService.getTheme();
    this.language = this.settingsService.getLanguage();
//
    this.goodTextTitle(this.language);
    this.goodTextGoHome(this.language); 
    this.colorTitle = this.gestionConfigEngFrService.getColorTitle("How use it");
  }

  goodTextTitle(language:string){
    this.textTitle = this.traductionService.findGoodLabel(language,"Mode d'emploi",'How to use');
  }
  goodTextGoHome(language:string){
    this.textGoHome = this.traductionService.findGoodLabel(language,'Retour au jeu','Go to play');
  } 
  openMenu() {
    this.menu.open('sideMenu');
  }
  goHome() {
    this.navCtrl.navigateBack('/home'); 
  }
}
