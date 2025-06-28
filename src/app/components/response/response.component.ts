import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  Type,
  ComponentRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Composants d’animation
import { AnimationConfettisComponent }   from 'src/app/components/animation-confettis/animation-confettis.component';
import { AnimationMedalComponent }        from 'src/app/components/animation-medal/animation-medal.component';
import { AnimationBalloonsComponent }     from '../animation-balloons/animation-ballons.component'; // ✅ attention au nom du fichier
import { AnimationFeuxArtificesComponent } from '../animation-feux-artifices/animation-feux-artifices.component';
// Services
import { SettingsService } from 'src/app/services/settings.service';
import { TraductionService } from 'src/app/services/traduction.service';

@Component({
  selector: 'app-response',
  standalone: true,
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
  imports: [CommonModule]
})
export class ResponseComponent implements OnInit, AfterViewInit {
  response: number = 0;
  textResponse: string = '';
  language: string = '';
  currentAnimationComponent: Type<any> | null = null;

  @ViewChild('dynamicAnimationContainer', { read: ViewContainerRef, static: false })
  animationContainer!: ViewContainerRef;

  // Tableau de composants d’animation possibles
  animations: Type<any>[] = [AnimationBalloonsComponent, 
                             AnimationConfettisComponent,
                             AnimationFeuxArtificesComponent]

constructor(
    private settingsService: SettingsService,
    private traductionService: TraductionService
  ) {}

  ngOnInit(): void {
    this.language = this.settingsService.getLanguage();
    this.textResponse = this.traductionService.findGoodLabel(this.language,'Vous avez choisi la réponse','You chose the answer');
    this.response = Math.abs(this.settingsService.getGamerResponse());
  }

  ngAfterViewInit(): void { 
    console.log('response.component',this.settingsService.getGamerResponseIsGood())
    if (this.settingsService.getGamerResponseIsGood()) {this.throwAnimation();
    }; };
  

  throwAnimation(): void {
      // 🔀 Choisir un composant d’animation (ici : ballons en dur ou aléatoire)
      const randomIndex = Math.floor(Math.random() * this.animations.length);
      const animationComponent = this.animations[randomIndex]; // ← change vers [randomIndex] si tu veux l’aléatoire
      //const animationComponent = this.animations[2]; // ← change vers [randomIndex] si tu veux l’aléatoire
      // 🧹 Vider le container
      this.animationContainer.clear();
      // 🧱 Créer dynamiquement le composant
      const componentRef: ComponentRef<any> = this.animationContainer.createComponent(animationComponent);
      }
    
}
