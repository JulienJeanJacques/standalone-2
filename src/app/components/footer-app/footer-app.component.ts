import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
// ionic
import { AlertController }   from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
//rxjs
import { Subscription } from 'rxjs';
// my classes
import { Item } from 'src/app/classes/item';
//my services
import { SettingsService   }      from '../../services/settings.service';
import { TraductionService }      from '../../services/traduction.service';
import { FindTheNextItem }        from '../../services/find-the-next-item.service';
import { SeeInMyConsoleService }  from 'src/app/services/seeInMyConsole.service';
import { ConfigThemeService }     from 'src/app/services/config-theme.service';

@Component({
  selector: 'footer-app',
  standalone: true,
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss'],
  imports: [CommonModule,IonicModule], 
})
export class FooterAppComponent  implements OnInit {
  private settingsSubscription!: Subscription;
  public footerContent:    string = 'Aller à';
  public footerBackward:   string ='Backward';
  public footerForward:    string = 'Forward';
  public footerLeave:      string = 'Leave';
  public count:            string = '1';
  public item:             string = 'd1_1q';
  public language:         string = 'fr';
  public theme:    'light'|'dark' = 'light';  
  private textTitle:      string = 'Alert';  
  private textAlert:      string = 'You did not answer';
  private textButton:     string = 'Continue';
  constructor(
    private settingsService :   SettingsService,
    private traductionService:  TraductionService,
    private findTheNextItem:    FindTheNextItem,
    private seeInMyConsole:     SeeInMyConsoleService,
    private themeService:       ConfigThemeService,
    private alertController:    AlertController,

  ) { }
  
  ngOnInit() {
    // 1. On s'abonne au service 
      this.settingsSubscription = this.settingsService.settingsObs$.subscribe(newSettings => {
      // Réagir à la mise à jour de la configuration
      this.language = this.settingsService.getLanguage();
      this.item     = this.settingsService.getItem();
      this.count    = this.settingsService.getCount();
      this.theme    = this.settingsService.getTheme() 
      this.updateAppFooter(this.language)// Mettre à jour les pages lorsque la langue change
      this.upDateTheme(this.settingsService.getTheme());
      this.textAlert = this.traductionService.findGoodLabel(this.language,"Votre n'avez pas répondu",'You did not answer');
      this.textTitle = this.traductionService.findGoodLabel(this.language,"Attention",'Alert');
      this.textButton = this.traductionService.findGoodLabel(this.language,"Continuer","Continue");
      }
      )
    }
  // private async alert() {
  //   const alert = await this.alertController.create({
  //     header:  this.textTitle,              // Titre de l'alerte
  //     message: this.textAlert ,  
  //     cssClass: 'custom-alert',     // IMPORTANT : la classe personnalisée ici           // Texte à afficher
  //     buttons: [
  //       {
  //         text: this.textButton,                // Texte du bouton
  //         role: 'cancel',                   // Ferme l'alerte
  //         handler: () => {
  //           console.log('Popup fermée');
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
async alert() {
  const alert = await this.alertController.create({
    header: this.textTitle,
    message: this.textAlert ,
    buttons: [
      {
        text: this.textButton,  
        role: 'cancel',
        handler: () => {
          console.log('Popup fermée');
        }
      }
    ]
  });
  await alert.present();
}


  upDateTheme(theme: 'light' | 'dark'){
    this.themeService.applyTheme(theme)// Ajoutez ici si besoin
  }
  updateAppFooter(language:string) {
    this.footerContent  = this.traductionService.findGoodLabel(language,'Aller en','Go to');
    this.footerBackward = this.traductionService.findGoodLabel(language,'Arrière','Backward');
    this.footerForward  = this.traductionService.findGoodLabel(language,'Avant','Forward');
    this.footerLeave    = this.traductionService.findGoodLabel(language,'Quitter','Leave');
  }
  goForward() {
    const nameOfItem = this.settingsService.getItem();
    const item = new Item(nameOfItem);
    let ok:boolean = true;
    if (item.nature === 'q' && !this.settingsService. getIsThisAnserWasDone()) {this.alert()}
    if (ok) {
    const  currentItemName = this.settingsService.getItem(); 
    const newItemName = this.findTheNextItem.ifForward(currentItemName);
    this.settingsService.setItem(newItemName);
    }
  }
  // Nouvelle méthode pour gérer le clic sur l'icône "arrow-back"
  goBackward() {
    const currentItemName = this.settingsService.getItem(); 
    const newItemName  = this.findTheNextItem.ifBackward(currentItemName);
    this.settingsService.setItem(newItemName);
  }
  saveAndQuitApp(){
  this.seeInMyConsole.params('footer-app.component-saveAndQuit')
  this.settingsService.setAll(this.settingsService.getCurrentSettings())
  // Pour quitter l'application sur mobile
  //App.exitApp();
} 
}
