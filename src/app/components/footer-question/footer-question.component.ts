import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule }    from '@ionic/angular';
import { AlertController} from '@ionic/angular';
//my services
import { FindTheNextItem }       from 'src/app/services/find-the-next-item.service';
import { SettingsService }       from 'src/app/services/settings.service';
// import { AnalyseResponseService }from '../../services/analyse-response.service'
// import { SeeInMyConsoleService } from 'src/app/services/seeInMyConsole.service';
// import { GamerResultsService }   from '../../services/gamer-results.service'
@Component({
  selector: 'footer-question',
  standalone: true,
  templateUrl: './footer-question.component.html',
  styleUrls: ['./footer-question.component.scss'],
  imports: [IonicModule,FormsModule],
})
export class FooterQuestionComponent implements OnInit {

  popoverSettings = {
    side: 'bottom',
    alignment: 'center',
    cssClass: 'my-select-popover'
  };
  lng:          string = '' ;
  selectedValue:string = '';
  textValidate: string  = '';

  constructor(
    private alertController:        AlertController, 
    private findTheNextItem:        FindTheNextItem,
    private settingsService:        SettingsService,
    // private analyseResponseService: AnalyseResponseService,
    // private gamerResultsService:    GamerResultsService,
    // private seeInMyConsoleService:  SeeInMyConsoleService,
  ) 
{}
 async ngOnInit() {
  this.lng = this.settingsService.getLanguage();
  if (this.lng == 'en') {this.textValidate = 'Validate';}
  if (this.lng == 'fr') {this.textValidate = 'Valider';}
 }
  // {this.selectedValue = ''}
  selectValue(value: string) {}

  async validateChoice() {
    if (this.selectedValue === null) {
      const alert = await this.alertController.create({
        header: 'Aucun choix',
        message: 'Aucun choix n\'a été fait.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const confirmAlert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir valider ce choix?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Confirmer',
          handler: () => {
            // Rediriger vers une autre page
          }
        }
      ]
    });
    await confirmAlert.present();
  }

async promptValidation() {
  // Vérifie si un choix a été fait
  let definitifMessage: string = '';
  let validationMessage:string= '';
  let aHeader:          string = '';
  let annulation:       string = '';
  let validate:         string = '';

  
  if (this.lng == 'en'){ 
    definitifMessage  = 'Your choice is final. Do you want to confirm?';
    validationMessage = 'Please select an option before confirming.';
    aHeader           = 'No choice';
    annulation        = 'Cancel';
    validate          = 'validate';
  }
  
    if (this.lng == 'fr'){ 
    definitifMessage  = 'Votre choix est définitif. Voulez-vous valider?';
    validationMessage = 'Veuillez sélectionner une option avant de valider.';
    aHeader           = 'Aucun choix';
    annulation        = 'Annuler';
  validate            = 'validation';}
  

  if (!this.selectedValue) {
    const alert = await this.alertController.create({
      header: aHeader,
      message: validationMessage,
      cssClass: this.settingsService.getTheme() === 'dark' ? 'alerte-dark' : 'alerte-light',
      buttons: ['OK']
    });
    await alert.present();
    return;
  }

  // Popup de confirmation
  const confirmAlert = await this.alertController.create({
    header: 'Attention',
    message: definitifMessage,
    cssClass: this.settingsService.getTheme() === 'dark' ? 'alert-dark' : 'alert-light',
    buttons: [
      {
        text: annulation,
        role: 'cancel',
      },
      {
        text: validate,
        handler: () => {
          // Retrieve the selected value:
          // récupère la valeur sélectionnée
          //const choix:number = this.analyseResponseService.nature(parseInt(this.selectedValue,10)); 
          // récupère la valeur sélectionnée
          const choix:number = -this.selectedValue; 
          console.log('footer-question-pop-up-choix  analyse-1',this.selectValue)
          // enregistre la réponse dans l'ensemble des réponses du joueur
          this.settingsService.setGamerResponse(choix);
          // affiche toutes les réponses du joueur
          console.log('footer-question-pop-up-choix  analyse-2',this.settingsService.getGamerResults())
          //
          // this.settingsService.setReinitAllResults();// only for the developpement
          // trouve l'item suivant
          // et change l'item suivant 
          console.log('footer-question.component-promptValidation',this.settingsService.getItem())
          this.settingsService.setItem(this.findTheNextItem.ifForward(this.settingsService.getItem()));
          console.log('footer-question.component-promptValidation',this.settingsService.getItem())
        }
      }
    ]
  });
  await confirmAlert.present();
}
}
