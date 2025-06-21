import { Component, OnInit, Input } from '@angular/core';
import { ModalController }          from '@ionic/angular';
import { IonicModule }              from '@ionic/angular';
// my service 
import { SettingsService } from 'src/app/services/settings.service';
import { TraductionService } from 'src/app/services/traduction.service';

@Component({
  selector: 'app-dialog-window-modal',
  standalone: true,
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss'],
  imports: [IonicModule]
})
export class DialogWindowModal implements OnInit{
  textCloseButton:  string = 'Close';
  @Input() title:   string = '';
  @Input() message: string ='';

  constructor(
    private modalCtrl         : ModalController,
    private settingsService   : SettingsService,
    private traductionService : TraductionService,
  ) {}

ngOnInit(): void {
  this.textCloseButton = this.traductionService.findGoodLabel(this.settingsService.getLanguage(),'Fermer','Close');
}
  close() {
    this.modalCtrl.dismiss();
  }
}