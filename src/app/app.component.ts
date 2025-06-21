import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router }       from '@angular/router';
import { NgIf }         from '@angular/common';
//
import { IonApp,IonContent,IonSplitPane,IonMenu,IonRouterOutlet, } from '@ionic/angular/standalone';
// my components
import { SideMenuRouterLinkComponent}  from './components/side-menu-router-link/side-menu-router-link.component'
import { WelcomeImageComponent}        from './components/welcome-image/welcome-image.component'
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonContent, 
    CommonModule,
    NgIf,
    IonApp, 
    IonSplitPane, 
    IonMenu,
    IonRouterOutlet,
    SideMenuRouterLinkComponent,
    WelcomeImageComponent,
],
})
export class AppComponent implements OnInit{
  showWelcomeImage = true; // Variable pour contrôler l'affichage de la page d'accueil
  
  constructor(
    private router: Router,
   ) {
  }

ngOnInit(){
    this.initializeApp();
  }
    
initializeApp() {
 // Afficher la page d'accueil avec l'image
  this.showWelcomeImage = true;
  // Après 3 secondes, cacher l'image et naviguer
  setTimeout(() => {
    this.showWelcomeImage = false;
    this.router.navigate(['home']);
  }, 6000);
}
}

