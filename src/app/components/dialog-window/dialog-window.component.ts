import { Component, OnInit, Input } from '@angular/core';
import { ModalController }          from '@ionic/angular';
import { IonicModule }              from '@ionic/angular';
// my service 
import { SettingsService }        from 'src/app/services/settings.service';
import { ItemService }            from 'src/app/services/item.service';
import { TraductionService }      from 'src/app/services/traduction.service';

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
    private itemService       : ItemService,
    private traductionService : TraductionService,
  ) {}

ngOnInit(): void {
  const language = this.itemService.language(this.settingsService.getItem());
  console.log('dialog-window.component-ngOnInit-language',language);
  this.textCloseButton = this.traductionService.findGoodLabel(language,'Fermer','Close');
}
  close() {
    this.modalCtrl.dismiss();
  }
}