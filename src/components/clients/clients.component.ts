import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [MatTooltipModule],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.scss',
})
export class ClientsComponent {}
