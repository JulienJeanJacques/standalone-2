import { Component, OnInit } from '@angular/core';
// my service
import { TraductionService }    from '../../services/traduction.service';
import { SettingsService }      from '../../services/settings.service';
//
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent  implements OnInit {
  textFrench:       string = 'Votre réponse était';
  textEnglish:      string = 'Your answer was';
  textYourChoice :  string = '';

  imageSrc!:        string;
  response: number = 0;
  // largeur et hauteur désirées
  imageWidth:  number = 30;  // en pixels
  imageHeight: number = 30; // en pixels

     constructor(  private traductionService:  TraductionService,
                   private settingsService :   SettingsService,
     ) { }


  ngOnInit() {
     console.log('this.response.component-ngOnInit',this.settingsService.getGamerResults());
    console.log('this.response.component-ngOnInit',this.settingsService.getGamerResponseIsGoodForAllTime());
    this.response       = this.settingsService.getGamerResponseInClear();
    this.textYourChoice = this.traductionService.findGoodLabel(this.settingsService.getLanguage(),this.textFrench,this.textEnglish);
    this.imageSrc       = this.choiceOfImage();
    console.log('this.response.component-ngOnInit',this.imageSrc);
  }
choiceOfImage():string {
    console.log('this.response.component-choiceOfImage',this.settingsService.getGamerResponseIsGoodForAllTime());
   let image: string = "";
   if (  this.settingsService.getGamerResponseIsGoodForAllTime() ) {
            this.imageWidth  = 80;  // en pixels
            this.imageHeight = 80; // en pixels
             image   = `assets/images/happy.jpeg`;}
  else {     
            this.imageWidth  = 80;  // en pixels
            this.imageHeight = 80; // en pixels
            image   = `assets/images/desappointed.jpeg`;}
  return image
}
}
