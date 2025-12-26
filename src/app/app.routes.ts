import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Inicio!'
    },
    {
        path: 'about-us',
        title: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
    },
    {
        path: 'xire',
        title: 'Xirê - Traduções',
        loadComponent: () => import('./pages/xire/xire.component').then(m => m.XireComponent)
    },
    // {
    //     path: 'bazar',
    //     title: 'bazar',
    //     loadComponent: () => import('./pages/bazar/bazar.component').then(m => m.BazarComponent)
    // },
    {
        path: 'agenda',
        title: 'agenda',
        loadComponent: () => import('./pages/agenda/agenda.component').then(m => m.AgendaComponent)
    },
    {
        path: 'contatos',
        title: 'contatos',
        loadComponent: () => import('./pages/contatos/contatos.component').then(m => m.ContatosComponent)
    },
];