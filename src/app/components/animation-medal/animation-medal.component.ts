import { Component, OnInit,ViewChild, ViewContainerRef  } from '@angular/core';


@Component({
  selector: 'animation-medal',
  templateUrl: './animation-medal.component.html',
  styleUrls: ['./animation-medal.component.scss'],
  // aucune dépendance nécessaire ici
})
export class AnimationMedalComponent implements OnInit {
 private medalRef: any; 
 @ViewChild('medalContainer', { read: ViewContainerRef, static: true }) medalContainer!: ViewContainerRef;
  constructor() {}

  ngOnInit() {
    // vous pouvez ajouter une logique pour déclencher l'animation si nécessaire
  }
  launchMedal() {
    // Supprimer le composant existant si besoin
    if (this.medalRef) {
      this.medalRef.destroy();
    }
    // Créer le composant dans le conteneur référencé
    this.medalRef = this.medalContainer.createComponent(AnimationMedalComponent);
  
    // Optionnel : si vous souhaitez configurer des inputs, faites-le ici
    // this.medalRef.instance.someInput = someValue;
  
    // Vous pouvez aussi programmer la destruction automatique après une durée
    setTimeout(() => {
      if (this.medalRef) {
        this.medalRef.destroy();
      }
    }, 6000); // par exemple 6 secondes
  }
}