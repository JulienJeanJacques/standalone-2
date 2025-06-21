import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgIf } from '@angular/common';
//
import { NavController }     from '@ionic/angular';
import { MenuController }    from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
//my services
import { SettingsService }             from 'src/app/services/settings.service';
import { TraductionService }           from 'src/app/services/traduction.service';
import { GestionConfigEngFrService}    from 'src/app/services/gestion-config-eng-fr.service';
//my component
import { AstrodidactFrComponent }  from 'src/app/components/astrodidact-fr/astrodidact.fr.component';
import { AstrodidactEnComponent  } from 'src/app/components/astrodidact-en/astrodidact.en.component';
// my interfaces
import { ChoiceMenuSide,ConfigService } from '../../interfaces/types';
@Component({
  selector: 'app-astrodidact',
  standalone: true,
  templateUrl: './astrodidact.page.html',
  styleUrls: ['./astrodidact.page.scss'],
  imports: [
    IonicModule,
    NgStyle,
    NgIf,
    AstrodidactEnComponent,
    AstrodidactFrComponent]
})
export class AstrodidactPage implements OnInit {
sideMenu:   ChoiceMenuSide[] = [];
colorTitle:           string = '';
theme:                string = 'light';
textGoHome:           string = 'Go to Play';
language:             string = 'en';
version:              string = 'v.1.0';
private configService = new ConfigService(); // création manuelle

  constructor(
    private navCtrl:                  NavController,
    private menu:                     MenuController,
    private settingsService:          SettingsService,
    private traductionService:        TraductionService,
    private gestionConfigEngFrService:GestionConfigEngFrService,
  ) { }

  ngOnInit() {
      this.theme        = this.settingsService.getTheme();
      this.language     = this.settingsService.getLanguage();
      this.goodTextGoHome(this.settingsService.getLanguage()); // Mettez à jour textGoHome ici
      this.version      = this.configService.appVersion;
      this.colorTitle   = this.gestionConfigEngFrService.getColorTitle('AstroDidact');
    };

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
