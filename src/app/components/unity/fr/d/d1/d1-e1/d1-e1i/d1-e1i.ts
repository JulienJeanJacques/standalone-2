import { Component, OnInit} from '@angular/core';
// service
import { PathService }      from '../../../../../../services/path-images.service';
import { SettingsService }  from '../../../../../../services/settings.service';
//class
import { Item}              from '../../../../../../classes/item'

@Component({
selector: 'app-d1-e1i',
templateUrl: 'd1-e1i.html'
})
export class D1E1iComponent implements OnInit {
item = new Item('d1_1q');
localPath : string = '';

constructor(public pathService: PathService,
            public settingsService:SettingsService
) { }
ngOnInit() {
    this.item      = new Item(this.settingsService.getItem())
    this.localPath = this.item.level + this.item.chapter + '/' + this.item.chapter + this.item.level + this.item.question + '/';
 }
}
