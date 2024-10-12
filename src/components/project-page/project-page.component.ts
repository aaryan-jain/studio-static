import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-project-page',
    standalone: true,
    imports: [],
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
    constructor(
        private route: Router,
        private commonS: CommonService
    ) {}

    project: any;

    ngOnInit() {
        const url = this.route.url;
        // console.log(url);
        const lastCharacter = url.charAt(url.length - 1);
        // console.log(Number(lastCharacter) - 1);
        this.project = this.commonS.content[Number(lastCharacter) - 1];
    }
}
