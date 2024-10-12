import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [MatGridListModule, CommonModule, RouterModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
    enteredTileTwo = true;
    isMobileView = false;

    projects = this.commonService.content;
    constructor(
        private routerService: Router,
        private commonService: CommonService,
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this.breakpointObserver
            .observe([Breakpoints.Handset])
            .subscribe(result => {
                this.isMobileView = result.matches;
            });
    }
}
