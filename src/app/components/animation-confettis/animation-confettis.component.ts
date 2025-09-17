// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// // my service
// import { MusicService } from '../../services/music.service';
// @Component({
//   selector: 'animation-confettis',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './animation-confettis.component.html',
//   styleUrls: ['./animation-confettis.component.scss'],
// })
// export class AnimationConfettisComponent implements OnInit {
//   countConfettis: number = 100;
//   countSerpentins: number = 20;

//   confettis: {
//     x: number;
//     size: string;
//     color: string;
//     animationDuration: string;
//     delay: string;
//     angle: number;
//   }[] = [];

//   private COLORS = [
//     '#FF6347', '#FFD700', '#ADFF2F', '#00BFFF', '#FF69B4',
//     '#FFA500', '#40E0D0', '#FF4500', '#DA70D6', '#7CFC00',
//     '#FF1493', '#FF8C00'
//   ];

//    constructor(private musicService: MusicService) {}
  
//     ngOnInit() {
//         this.generateConfettis();
//         this.musicService.playMusic('forGoodResponse-2.mp3', 10, 20);
//     }

//   generateConfettis() {
//     const total = this.countConfettis + this.countSerpentins;
//     this.confettis = [];

//     for (let i = 0; i < total; i++) {
//       const isConfetti = i < this.countConfettis;
//       const size = isConfetti ? '6px' : '12px';
//       const angle = Math.random() * 360;

//       this.confettis.push({
//         x: Math.random() * 100,
//         size,
//         color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
//         animationDuration: (6 + Math.random() * 4) + 's', // 6s à 10s
//         delay: Math.random() * 1 + 's',
//         angle
//       });
//     }
//   }
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'animation-confettis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-confettis.component.html',
  styleUrls: ['./animation-confettis.component.scss'],
})
export class AnimationConfettisComponent implements OnInit, OnDestroy {
  countConfettis: number = 100;
  countSerpentins: number = 20;
  confettis: {
    x: number;
    size: string;
    color: string;
    animationDuration: string;
    delay: string;
    angle: number;
  }[] = [];

  private COLORS = [
    '#FF6347', '#FFD700', '#ADFF2F', '#00BFFF', '#FF69B4',
    '#FFA500', '#40E0D0', '#FF4500', '#DA70D6', '#7CFC00', '#FF1493', '#FF8C00'
  ];

  private intervalId!: any;

  private totalDuration = 15000; // durée totale de l'animation en ms
  private waveInterval = 3000;   // intervalle entre chaque vague en ms

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('forGoodResponse-2.mp3', 10, 20);
    this.startConfettiRain();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startConfettiRain() {
    const startTime = Date.now();

    // Génération immédiate de la première vague
    this.generateConfettis();

    this.intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= this.totalDuration) {
        clearInterval(this.intervalId);
        return;
      }

      // Générer une nouvelle vague de confettis
      this.generateConfettis();
    }, this.waveInterval);
  }

  generateConfettis() {
    const total = this.countConfettis + this.countSerpentins;

    for (let i = 0; i < total; i++) {
      const isConfetti = i < this.countConfettis;
      const size = isConfetti ? '6px' : '12px';
      const angle = Math.random() * 360;

      this.confettis.push({
        x: Math.random() * 100,
        size,
        color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
        animationDuration: (6 + Math.random() * 4) + 's', // 6s à 10s
        delay: Math.random() * 1 + 's',
        angle
      });
    }

    // Optionnel : garder seulement les confettis visibles pour éviter l'accumulation
    this.confettis = this.confettis.slice(-500); // garder max 500 particules
  }
}
