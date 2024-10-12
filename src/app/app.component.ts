import { Component } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Route,
    Router,
    RouterModule,
    RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductsComponent } from '../components/products/products.component';
import { AboutFrontPageComponent } from '../components/about-front-page/about-front-page.component';
import { AchievementsBarComponent } from '../components/achievements-bar/achievements-bar.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ClientsComponent } from '../components/clients/clients.component';
import { ContactComponent } from '../components/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FooterComponent } from '../components/footer/footer.component';

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
        ContactComponent,
        GoogleMapsModule,
        FooterComponent,
        RouterModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'studI0-statiQ';
}
