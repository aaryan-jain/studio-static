import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [MatGridListModule, CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    enteredTileTwo = true;
}
