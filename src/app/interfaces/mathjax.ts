// Déclaration globale pour étendre le type window
declare global {
  interface Window {
    MathJax: {
      // La configuration globale de MathJax
      config?: any;
      // La méthode functions de MathJax v3
      typesetPromise?: (elements?: HTMLElement[] | HTMLElement) => Promise<void>;
    };
  }
}
export {}; // 