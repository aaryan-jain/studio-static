import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductsComponent } from '../components/products/products.component';
import { AboutFrontPageComponent } from '../components/about-front-page/about-front-page.component';
import { AchievementsBarComponent } from '../components/achievements-bar/achievements-bar.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ClientsComponent } from '../components/clients/clients.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponent,
        ProductsComponent,
        AboutFrontPageComponent,
        AchievementsBarComponent,
        ProjectsComponent,
        ClientsComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'studio-static';
}
