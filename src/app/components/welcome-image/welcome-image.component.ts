import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-image',
  templateUrl: './welcome-image.component.html',
  styleUrls: ['./welcome-image.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
],
})
export class WelcomeImageComponent implements OnInit {
  // Vous pouvez ajouter des propriétés ou méthodes ici si nécessaire

  letters: string[] = [];
  displayedLetters: number = 0;
  text: string = 'ASTRODIDACT';

  ngOnInit() {
    this.letters = this.text.split('');
    this.showLetters();
  }

  showLetters() {
    const interval = setInterval(() => {
      this.displayedLetters++;
      if (this.displayedLetters === this.letters.length) {
        clearInterval(interval);
      }
    }, 300); // Ajustez ce délai à votre convenance
  }
}
