import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
//
import * as IoniconsIcons from 'ionicons/icons';
//my Services
import { ConfigThemeService } from '../src/app/services/config-theme.service'

addIcons(IoniconsIcons);
//
import { routes }       from './app/app.routes';
import { AppComponent } from './app/app.component';



bootstrapApplication(AppComponent, {
  providers: [
    ConfigThemeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
