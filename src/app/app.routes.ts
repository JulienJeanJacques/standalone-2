import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
  path: 'home',
  loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
},
  {
    path: 'home/:id',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'astrodidact/:id',
    loadComponent: () => import('./pages/astrodidact/astrodidact.page').then((m) => m.AstrodidactPage),
  },
  {
    path: 'change-question/:id',
    loadComponent: () => import('./pages/change-question/change-question.page').then((m) => m.ChangeQuestionPage),
  },
  {
    path: 'results/:id',
    loadComponent: () => import('./pages/results/results.page').then((m) => m.ResultsPage),
  },
  {
    path: 'settings/:id',
    loadComponent: () => import('./pages/settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: 'use/:id',
    loadComponent: () => import('./pages/use/use.page').then((m) => m.UsePage),
  },
];
