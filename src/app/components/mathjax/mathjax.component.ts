import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MathJaxService } from '../../services/mathjax.service';

@Component({
  selector: 'mathjax',
  template: `<div [innerHTML]="content"></div>`, // Permet d'injecter le contenu LaTeX directement
})
export class MathJaxComponent implements OnInit, OnChanges {
  @Input() content: string = '';

  constructor(private mathJaxService: MathJaxService) {}

  ngOnInit() {
    this.mathJaxService.loadMathConfig(); // Charger la configuration
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['content'] && this.content) {
      this.renderMath(); // Rendre MathJax quand le contenu change
    }
  }

  renderMath() {
    setTimeout(() => {
      this.mathJaxService.typeset(this.content); // Appeler le service pour rendre le contenu
    }, 100); // Délai pour s'assurer que le DOM est mis à jour
  }
}
