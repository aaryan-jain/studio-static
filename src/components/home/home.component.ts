import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { AboutFrontPageComponent } from '../about-front-page/about-front-page.component';
import { AchievementsBarComponent } from '../achievements-bar/achievements-bar.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        ProductsComponent,
        AboutFrontPageComponent,
        AchievementsBarComponent,
        ProjectsComponent,
        ClientsComponent,
        ContactComponent,
        FooterComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
