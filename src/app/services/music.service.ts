import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement | null = null;

  constructor() {}

  playMusic(filename: string, startTime: number = 0, duration?: number) {
    console.log('music.service');
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
    this.audio = new Audio(`assets/music/${filename}`);
    this.audio.currentTime = startTime;

    console.log('Tentative de lecture');
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Lecture réussie');
      }).catch((error) => {
        console.error('Erreur lors de la lecture :', error);
      });
    }

    if (duration) {
      setTimeout(() => {
        this.stop();
      }, duration * 1000);
    }
  }

  pause() {
    this.audio?.pause();
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }
reset() {
  this.audio = null;
}
}
