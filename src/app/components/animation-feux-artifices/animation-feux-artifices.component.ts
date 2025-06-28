import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// my service
import { MusicService } from '../../services/music.service';
@Component({
  selector: 'animation-feux-artifices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-feux-artifices.component.html',
  styleUrls: ['./animation-feux-artifices.component.scss']
})
export class AnimationFeuxArtificesComponent implements OnInit {
  particles: { x: number; y: number; color: string; size: string; opacity: number; angle: number; speed: number; }[] = [];
  private COLORS = ['#FF6347', '#FFD700', '#ADFF2F', '#00BFFF', '#FF69B4', '#FFA500', '#40E0D0', '#FF4500', '#DA70D6', '#7CFC00', '#FF1493', '#FF8C00'];
  constructor(private musicService: MusicService) {}
  ngOnInit() {
    this.startFireworksLoop();
    this.musicService.playMusic('forGoodResponse-2.mp3', 10, 20);
  }

  startFireworksLoop() {
    // Lance un feu toutes les 1.5 seconde
    const intervalTime = 1500; 
    setInterval(() => {
      // Decalage aléatoire pour que chaque feu soit différent
      const offsetX = Math.random() * 20 - 10;
      const offsetY = Math.random() * 10;
      this.launchFirework(offsetX, 80 + offsetY);
    }, intervalTime);
  }

  launchFirework(offsetX: number, baseY: number) {
    const explosionCount = 500; // beaucoup plus++ 
    const centerX = 50 + offsetX; // décalage horizontal
    const centerY = baseY; // hauteur de départ plus haut

    // Si des particules existent déjà, on ne remplace pas (pour accumuler)
    for (let i = 0; i < explosionCount; i++) {
      const angle = Math.random() * Math.PI * 2 * 1.8 - Math.PI * 0.9; // dispersal très large
      const speed = Math.random() * 10 + 4; // plus rapide pour aller haut
      const color = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
      this.particles.push({
        x: centerX,
        y: centerY,
        color,
        size: Math.random() > 0.5 ? '4px' : '3px',
        opacity: 1,
        angle,
        speed
      });
    }
    this.animateParticles();
  }

animateParticles() {
  const startTime = Date.now(); // enregistre le moment de départ
  const duration = 10000; // 10 secondes en ms

  const animate = () => {
    const elapsed = Date.now() - startTime;
    // Si 10 secondes passées, on arrête
    if (elapsed >= duration) {
      this.particles = []; // on vide pour terminer
      return;
    }

    // Sinon, on continue l’animation
    this.particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed * 0.02;
      p.y += Math.sin(p.angle) * p.speed * 0.02 - 0.03;
      p.opacity -= 0.00167; // ajuste pour 10 sec
      p.speed *= 0.98;
    });
    this.particles = this.particles.filter(p => p.opacity > 0);
    if (this.particles.length > 0) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}
}
