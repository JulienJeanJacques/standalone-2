
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'animation-confettis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-confettis.component.html',
  styleUrls: ['./animation-confettis.component.scss'],
})
export class AnimationConfettisComponent implements OnInit {

  @Input() countConfettis: number = 100;
  @Input() countSerpentins: number = 20;

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
    '#FFA500', '#40E0D0', '#FF4500', '#DA70D6', '#7CFC00',
    '#FF1493', '#FF8C00'
  ];

  ngOnInit() {
    this.generateConfettis();
  }

  generateConfettis() {
    const total = this.countConfettis + this.countSerpentins;
    this.confettis = [];
    for (let i = 0; i < total; i++) {
      const isConfetti = i < this.countConfettis;
      const size = isConfetti ? '6px' : '12px';
      const angle = Math.random() * 360;
      this.confettis.push({
        x: Math.random() * 100,
        size,
        color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
        animationDuration: (3 + Math.random() * 2) + 's',
        delay: Math.random() * 1 + 's',
        angle
      });
    }
  }
}
