// angular
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule }   from '@angular/common';         // Ajouté pour directives Angular (si besoin)
// ionic
import { IonicModule }    from '@ionic/angular';           // Ajouté si tu utilises des composants Ionic
import { Item }           from '../../../../../../../classes/item';
// my services
import { MathJaxService }   from '../../../../../../../services/mathjax.service';
import { SettingsService }  from '../../../../../../../services/settings.service';
import { PathService }      from '../../../../../../../services/path-images.service';

@Component({
  selector: 'app-d1e1q-en',
  standalone: true,
  templateUrl: 'd1-e1q-en.html',
  styleUrls: ['d1-e1q-en.scss'],
  imports: [CommonModule, IonicModule]  // Ajouté pour rendre le composant utilisable avec Angular/Ionic
})
export class D1E1qEnComponent implements OnInit, AfterViewInit {

  itemName : string = 'd1_1q';         // inchangé
  item = new Item(this.itemName);       // inchangé
  localPath : string = '';              // inchangé
  isPlaying = false;                    // inchangé

  // ================== ViewChild ==================
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>; // Ajouté : pour gérer la vidéo
  @ViewChild('mathContainer1', { static: false }) mathContainer1!: ElementRef;              // inchangé
  @ViewChild('mathContainer2', { static: false }) mathContainer2!: ElementRef;              // inchangé

  mathContent_1: string = '\\sin (p) = \\sin ({p_{\\max }} )\\sin (z)';  // inchangé
  mathContent_2: string = '\\int_{a}^{b}\\frac{x}{2}\\textnormal{d}x';  // inchangé

  constructor(
    private mathJaxService:  MathJaxService,    // inchangé
    private settingsService: SettingsService,   // inchangé
    private pathImage:       PathService              // inchangé
  ) {}

  // ================== ngOnInit ==================
  ngOnInit() {
    this.itemName = this.settingsService.getItem(); // inchangé
    this.localPath = this.item.beforeUnderScore + '/' + this.item.chapter + this.item.level + this.item.question + '/'; // inchangé
  }

  // ================== ngAfterViewInit ==================
  async ngAfterViewInit() {
    // Rendre automatiquement les formules
    await this.renderMath(this.mathContainer1.nativeElement, this.mathContent_1); // inchangé
    await this.renderMath(this.mathContainer2.nativeElement, this.mathContent_2); // inchangé

    // ================== Ajout ==================
    // Recharge et joue la vidéo après que le composant est rendu
    this.reloadVideo();
  }

  // ================== pauseVideo ==================
  pauseVideo() {
    if (this.videoPlayer) {                     // inchangé
      this.videoPlayer.nativeElement.pause();   // inchangé
    }
    this.isPlaying = false;                     // inchangé
  }

  // ================== onVideoEnded ==================
  onVideoEnded() {
    console.log("La vidéo est terminée.");      // inchangé
    this.isPlaying = false;                     // inchangé
    // Quand la vidéo se termine, rendre les formules
    this.renderMath(this.mathContainer1.nativeElement, this.mathContent_1);  // inchangé
    this.renderMath(this.mathContainer2.nativeElement, this.mathContent_2);  // inchangé
  }

  // ================== getImagePath ==================
  getImagePath(nameOfImage: string): string {   // inchangé
    return this.pathImage.getPath(this.localPath) + nameOfImage;  // inchangé
  }

  // ================== renderMath ==================
  async renderMath(element: HTMLElement, formula: string) {  // inchangé
    element.innerHTML = `$$${formula}$$`;                    // inchangé
    if (this.mathJaxService && this.mathJaxService.typeset) { // inchangé
      await this.mathJaxService.typeset(element);           // inchangé
    }
  }

  // ================== reloadVideo ==================
  // Ajout : recharge la vidéo et lance la lecture
  reloadVideo() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      const video: HTMLVideoElement = this.videoPlayer.nativeElement;
      video.pause();       // arrêter si elle joue
      video.load();        // recharge la source
      video.play().catch(err => console.warn('Autoplay échoué', err));
      this.isPlaying = true;
    }
  }

}

