import { Type } from '@angular/core';

export const ComponentMap: { [key: string]: () => Promise<Type<any>> } = {
  'd1_1i_en': () => import('./components/unity/en/d/d1/d1-e1/d1-e1i/d1-e1i-en').then(m => m.D1E1iEnComponent),
  'd1_1i_fr': () => import('./components/unity/fr/d/d1/d1-e1/d1-e1i/d1-e1i-fr').then(m => m.D1E1iFrComponent),
  'd1_1q_en': () => import('./components/unity/en/d/d1/d1-e1/d1-e1q/d1-e1q-en').then(m => m.D1E1qEnComponent),
  'd1_1q_fr': () => import('./components/unity/fr/d/d1/d1-e1/d1-e1q/d1-e1q-fr').then(m => m.D1E1qFrComponent),
  'd1_1r_en': () => import('./components/unity/en/d/d1/d1-e1/d1-e1r/d1-e1r-en').then(m => m.D1E1rEnComponent),
  'd1_1r_fr': () => import('./components/unity/fr/d/d1/d1-e1/d1-e1r/d1-e1r-fr').then(m => m.D1E1rFrComponent),
};
