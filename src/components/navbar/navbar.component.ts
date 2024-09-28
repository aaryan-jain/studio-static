import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the MatToolbarModule

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [MatToolbarModule], // Add MatToolbarModule to the imports array
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
