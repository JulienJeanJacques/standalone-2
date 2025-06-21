//from angular
import { Component, OnInit,OnDestroy }       from '@angular/core';
import { CommonModule }            from '@angular/common';
import { Router, RouterModule }    from '@angular/router';
//
import { Subscription } from 'rxjs';
// from ionic
import { IonicModule }     from '@ionic/angular';
import { MenuController }  from '@ionic/angular';
// my services
import { SideMenuLanguageService } from '../../services/side-menu-language.service';
import {SettingsService}           from '../../services/settings.service';
//my interfaces
import { ChoiceMenuSide } from '../../interfaces/types';
@Component({
  selector: 'app-side-menu-router-link',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  templateUrl: './side-menu-router-link.component.html',
  styleUrls: ['./side-menu-router-link.component.scss'],
})
export class SideMenuRouterLinkComponent  implements OnInit,OnDestroy{
private settingsSubscription!: Subscription;
public appPages: ChoiceMenuSide[] = [];
public count:    string = '1';
public item:     string = 'd1_1q';
public language: string = 'fr';
public theme:    string = 'light';
constructor(
  private router: Router,
  private menuCtrl: MenuController,
  private sideMenuLanguageService: SideMenuLanguageService,
  private settingsService: SettingsService,
  ) {}

ngOnInit() {
 // 1. On s'abonne au service 
      this.settingsSubscription = this.settingsService.settingsObs$.subscribe(newSettings => {
      // Réagir à la mise à jour de la configuration
      this.language = this.settingsService.getLanguage();
      this.item     = this.settingsService.getItem();
      this.count    = this.settingsService.getCount();
      this.theme    = this.settingsService.getTheme();
      this.appPages = this.updateAppPages(this.language); // Mettre à jour les pages lorsque la langue change
  }
      )
    }
updateAppPages(language:string) {
    this.appPages = this.sideMenuLanguageService.updateLanguageSideMenu(language); 
    return this.appPages
}
navigateTo(page: string[]) {
    this.menuCtrl.close(); // Ferme le menu
    this.router.navigate(page); // Navigate to the page
  }
ngOnDestroy() {
    if (this.settingsSubscription) { this.settingsSubscription.unsubscribe();
    }
  }
}
