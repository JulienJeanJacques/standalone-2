import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigThemeService {
  private renderer: Renderer2;
  private readonly darkClass = 'dark-theme';
  private readonly lightClass = 'light-theme';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Applique visuellement le thème choisi
   */
  applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.classList.toggle('ion-palette-dark', theme === 'dark');
    // const body = document.body;
    // this.renderer.removeClass(body, this.darkClass);
    // this.renderer.removeClass(body, this.lightClass);
    // this.renderer.addClass(body, theme === 'dark' ? this.darkClass : this.lightClass);
    //forcer le rafraîchissement après un petit délai
    setTimeout(() => {
    // Optionnel : forcer une détection des changements
  }, 50);
  }

  /**
   * Retourne true si le thème actuellement appliqué est dark
   */
  isDark(): boolean {
    return document.body.classList.contains(this.darkClass);
  }
}
