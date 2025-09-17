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
  textFrench:       string = 'Votre réponse est';
  textEnglish:      string = 'Your answer is ';
  textYourChoice :  string = '';

   response: number = 0;
     constructor(  private traductionService: TraductionService,
                   private settingsService :   SettingsService,
     ) { }


  ngOnInit() {
    this.response = this.settingsService.getGamerResponse();
    this.textYourChoice = this.traductionService.findGoodLabel(this.settingsService.getLanguage(),this.textFrench,this.textEnglish);
  }

}
