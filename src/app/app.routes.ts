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
    }
];