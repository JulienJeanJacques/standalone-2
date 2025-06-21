import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//my services
import { SettingsService }     from 'src/app/services/settings.service';
import { TraductionService }   from 'src/app/services/traduction.service';
@Component({
  selector: 'app-response',
  standalone: true,
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
  imports: [
    CommonModule,
],
})
export class ResponseComponent  implements OnInit {
 response :     string = '';
 textResponse:  string = '';
 language :     string = ''

  constructor(
    private settingsService:    SettingsService,
    private traductionService:  TraductionService,) 
  { }

  ngOnInit() { 
    this.response     = this.settingsService.getResponseInResult();
    this.language     = this.settingsService.getLanguage();
    this.textResponse = this.traductionService.findGoodLabel(this.language,'Vous avez choisi la réponse','You chose the answer'



    );
  }

 
}
