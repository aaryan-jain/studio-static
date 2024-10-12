import { Routes } from '@angular/router';
import { ProjectPageComponent } from '../components/project-page/project-page.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'projects/:id',
        component: ProjectPageComponent,
    },
];
