import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
//
import { CommonModule } from '@angular/common';
import { IonicModule }  from '@ionic/angular';
//
import { MathJaxService }   from '../../../../../../services/mathjax.service';
// my services
import { PathService }      from '../../../../../../services/path-images.service';
import { SettingsService }  from '../../../../../../services/settings.service';
// my classes
import { Item } from '../../../../../../classes/item';
@Component({
  selector: 'app-d1-e1q',
  standalone: true,
  templateUrl: 'd1-e1q.html',
  styleUrls: ['d1-e1q.scss'],
  imports: [
    CommonModule,   // pour ngIf, ngFor, etc.
    IonicModule, ]  
  // Pas d'import supplémentaire si pas besoin de modules
})
export class D1E1qComponent implements AfterViewInit, OnInit {
  itemName : string = 'd1_1q'
  item = new Item(this.itemName)
  localPath : string = '';
  isPlaying = false;
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('mathContainer1', { static: false }) mathContainer1!: ElementRef;
  @ViewChild('mathContainer2', { static: false }) mathContainer2!: ElementRef;

  mathContent_1: string = '\\sin (p) = \\sin ({p_{\\max }} )\\sin (z)';
  mathContent_2: string = '\\int_{a}^{b}\\frac{x}{2}\\textnormal{d}x';

  constructor(
    private mathJaxService:  MathJaxService,
    private settingsService: SettingsService,
    private pathImage: PathService ) {
    }
  
  ngOnInit() {
    this.itemName = this.settingsService.getItem();
    this.item.changeItemFor(this.itemName)
    this.localPath = this.item.beforeUnderScore + '/' + this.item.chapter + this.item.level + this.item.question + '/'
  }
  
  pauseVideo() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause(); // Pause la vidéo si déjà en cours
    }
    this.isPlaying = false;
  }

  onVideoEnded() {
    console.log("La vidéo est terminée.");
    this.isPlaying = false;
    // Quand la vidéo se termine, rendre les deux formules
    this.renderMath(this.mathContainer1.nativeElement, this.mathContent_1);
    this.renderMath(this.mathContainer2.nativeElement, this.mathContent_2);
  }
  getImagePath(nameOfImage:string):string{
    return this.pathImage.getPath(this.localPath) + nameOfImage
  }

  // Fonction pour mettre à jour le contenu et faire le rendu de la formule
  async renderMath(element: HTMLElement, formula: string) {
    element.innerHTML = `$$${formula}$$`; // Encadrer la formule en display math
    if (this.mathJaxService && this.mathJaxService.typeset) {
      await this.mathJaxService.typeset(element);
    }
  }

  async ngAfterViewInit() {
    // Rendre automatiquement les formules au chargement du composant
    await this.renderMath(this.mathContainer1.nativeElement, this.mathContent_1);
    await this.renderMath(this.mathContainer2.nativeElement, this.mathContent_2);
  }
}