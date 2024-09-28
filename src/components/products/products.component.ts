import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
})
export class ProductsComponent {}
