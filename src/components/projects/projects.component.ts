import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [MatGridListModule, CommonModule, RouterModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    enteredTileTwo = true;

    projects = this.commonService.content;
    constructor(
        private routerService: Router,
        private commonService: CommonService
    ) {}
}
