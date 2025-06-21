import { NgStyle } from '@angular/common';
import { Component, Input, OnInit,} from '@angular/core';
import { CommonModule } from '@angular/common';
// my service
import { MusicService } from '../../services/music.service';
// my interface
import { Balloon } from '../../interfaces/types';

@Component({
  selector: 'animation-balloons',
  standalone: true,
  templateUrl: './animation-balloons.component.html',
  styleUrls: ['./animation-balloons.component.scss'],
  imports: [
    CommonModule,
    NgStyle,
  ]
})
export class AnimationBalloonsComponent implements OnInit {
  @Input() count: number = 50; // nombre de ballons
  @Input() colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
  balloons: Balloon[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
      this.generateBalloons();
      //this.musicService.playMusic('forGoodResponse.mp3', 0, 20);
  }

  generateBalloons() {
    this.balloons = [];
    for (let i = 0; i < this.count; i++) {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const leftPercent = Math.random() * 100;
      const speedSeconds = 20 + Math.random() * 20; // 20-40s
      const delaySeconds = Math.random() * 5; // jusqu'à 5s
      const colorGradient = `radial-gradient(circle at 50% 30%, ${color}, dark${color})`;

      this.balloons.push({
        x: leftPercent,
        speed: speedSeconds,
        delay: delaySeconds,
        colorGradient
      });
    }
  }

}
