import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule }    from '@ionic/angular';
import { AlertController} from '@ionic/angular';
//my services
import { FindTheNextItem }       from 'src/app/services/find-the-next-item.service';
import { SettingsService }       from 'src/app/services/settings.service';
import { StringsService }        from 'src/app/services/strings.service';
import { SeeInMyConsoleService } from 'src/app/services/seeInMyConsole.service';

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

  selectedValue:string;

  constructor(
    private alertController:        AlertController, 
    private findTheNextItem:        FindTheNextItem,
    private settingsService:        SettingsService,
    private stringsService:         StringsService,
    private seeInMyConsoleService:  SeeInMyConsoleService,
  ) 
  {this.selectedValue = ''}
  selectValue(value: string) {
  console.log('Valeur sélectionnée:', value); 
  }
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
        role: 'cancel'
      },
      {
        text: 'Valider',
        handler: () => {
          let nameOfItem:string = this.settingsService.getItem();
          let enreg:string = '';
          //Retrieve the selected value:
          const choix = this.selectedValue; 
          console.log('footer-question.component',choix,'***',choix.length)
          // Save this response: 
          // 1.we compare with RESULTS (constante) 
          // Nous enregistrons -1 si c'est une bonne réponse car c'est le premier passage. 
          // Nous enregistrons choix  si la réponse est fausse
          // Ceci permet d'envoyer les animations.
          if (this.stringsService.isGoodResponse(choix,nameOfItem)) {enreg = '-1';} else {enreg = choix};
          // 2.we save  in  settingsService.results (One or Two or Three )
          let results = this.settingsService.getResults();
          console.log('footer-question-promptValidation------------1',results);
          this.settingsService.setResponse(enreg);
          console.log('footer-question-promptValidation------------2',this.settingsService.getResults())
          //this.seeInMyConsoleService.params('footer-question-promptValidation-1');
          this.settingsService.setReinitAllResults();
          //this.seeInMyConsoleService.params('footer-question-promptValidation-2');
          // 3.we call ifForward de find-the-next-item
          nameOfItem = this.settingsService.getItem(); 
          this.findTheNextItem.ifForward(nameOfItem);
        }
      }
    ]
  });
  await confirmAlert.present();
}
}
