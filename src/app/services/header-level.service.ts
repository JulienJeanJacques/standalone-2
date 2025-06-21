import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderLevelService {
  // Créez un BehaviorSubject pour suivre le niveau actuel
  private levelSource = new BehaviorSubject<string>(''); // Vous pouvez mettre une valeur par défaut
  currentLevel = this.levelSource.asObservable();

  constructor() {}

  // Méthode pour mettre à jour le niveau
  changeLevel(level: string) {
    this.levelSource.next(level);
  }
}
