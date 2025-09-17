import { Component, OnInit } from '@angular/core';
// my service
import { TraductionService }    from '../../services/traduction.service';
import { SettingsService }      from '../../services/settings.service';
//
@Component({
  selector: 'app-response-false',
  templateUrl: './response-false.component.html',
  styleUrls: ['./response-false.component.scss'],
})
export class ResponseFalseComponent implements OnInit {

  imageSrc!:        string;

  textFrench:       string = 'Votre réponse est';
  textEnglish:      string = 'Your answer is ';
  textYourChoice :  string = '';

  response: number = 0;
  // largeur et hauteur désirées
  imageWidth: number = 150;  // en pixels
  imageHeight: number = 150; // en pixels

  constructor(  private traductionService: TraductionService,
                private settingsService :   SettingsService,
  ) { }

  ngOnInit() {
    this.response = this.settingsService.getGamerResponse();
    console.log('response-false-ngOnInit-----',this.response)
    this.textYourChoice = this.traductionService.findGoodLabel(this.settingsService.getLanguage(),this.textFrench,this.textEnglish);
    const n = Math.floor(Math.random() * 6) + 1;
    this.imageSrc = `assets/images/desappointed-${n}.jpeg`;
  }

}
