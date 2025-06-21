import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathJaxService {
  constructor() {
    this.loadMathConfig();
  }

  // Charger la configuration globale
  public loadMathConfig() {
    const mathJax = this.nativeGlobal().MathJax;
    if (mathJax) {
      // Définissez la config si vous en avez besoin
      mathJax.config = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
        },
        options: {
          renderActions: {
            doublePass: true // option pour améliorer le rendu
          }
        }
      };
    }
  }

  // Rendre dans un élément HTML
  public async typeset(element: HTMLElement) {
    const mathJax = this.nativeGlobal().MathJax;
    if (mathJax && mathJax.typesetPromise) {
      try {
        await mathJax.typesetPromise([element]);
      } catch (err) {
        console.error('Erreur lors du rendu MathJax:', err);
      }
    } else {
      console.error('MathJax n\'est pas chargé ou n\'a pas la méthode typesetPromise');
    }
  }

  private nativeGlobal(): any {
    return window as any;
  }
}