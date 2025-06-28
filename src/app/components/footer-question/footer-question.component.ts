import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule }    from '@ionic/angular';
import { AlertController} from '@ionic/angular';
//my services
import { FindTheNextItem }       from 'src/app/services/find-the-next-item.service';
import { SettingsService }       from 'src/app/services/settings.service';
import { AnalyseResponseService }from '../../services/analyse-response.service'
import { SeeInMyConsoleService } from 'src/app/services/seeInMyConsole.service';
import { GamerResultsService }   from '../../services/gamer-results.service'
@Component({
  selector: 'footer-question',
  standalone: true,
  templateUrl: './footer-question.component.html',
  styleUrls: ['./footer-question.component.scss'],
  imports: [IonicModule,FormsModule],
})
export class FooterQuestionComponent  {

  popoverSettings = {
    side: 'bottom',
    alignment: 'center',
    cssClass: 'my-select-popover'
  };

  selectedValue:string = '';

  constructor(
    private alertController:        AlertController, 
    private findTheNextItem:        FindTheNextItem,
    private settingsService:        SettingsService,
    private analyseResponseService: AnalyseResponseService,
    private gamerResultsService:    GamerResultsService,
    private seeInMyConsoleService:  SeeInMyConsoleService,
  ) 
{}
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
  if (!this.selectedValue) {
    const alert = await this.alertController.create({
      header: 'Aucun choix',
      message: 'Veuillez sélectionner une option avant de valider.',
      cssClass: this.settingsService.getTheme() === 'dark' ? 'alerte-dark' : 'alerte-light',
      buttons: ['OK']
    });
    await alert.present();
    return;
  }

  // Popup de confirmation
  const confirmAlert = await this.alertController.create({
    header: 'Attention',
    message: 'Votre choix est définitif. Voulez-vous valider?',
    cssClass: this.settingsService.getTheme() === 'dark' ? 'alert-dark' : 'alert-light',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
      },
      {
        text: 'Valider',
        handler: () => {
          //Retrieve the selected value:
          // récupère la valeur sélectionnée
          const choix:number = this.analyseResponseService.nature(parseInt(this.selectedValue,10)); 
          console.log('footer-question-pop-up-choix après analyse',choix)
          this.settingsService.setGamerResponse(choix);
          console.log('footer-question-pop-up-choix après analyse',this.settingsService.getGamerResults())
          //this.settingsService.setReinitAllResults();// only for the developpement
          this.findTheNextItem.ifForward(this.settingsService.getItem());
        }
      }
    ]
  });
  await confirmAlert.present();
}
}
