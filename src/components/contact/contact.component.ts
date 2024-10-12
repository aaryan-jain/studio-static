import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        GoogleMapsModule,
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
    zoom = 15;
    center: google.maps.LatLngLiteral = {
        lat: 28.386648098410983,
        lng: 77.35421579702427,
    };
    options: google.maps.MapOptions = {
        mapTypeId: 'roadmap',
        zoomControl: false,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        maxZoom: 21,
        minZoom: 8,
    };

    officeMarker = [
        {
            position: {
                lat: this.center.lat,
                lng: this.center.lng,
            },
            label: {
                color: 'black',
                text: 'Office of Studio Static',
                fontWeight: 'bold',
                fontSize: '24px',
            },
            title: 'Office of Studio Static',
            options: { animation: google.maps.Animation.BOUNCE },
        },
    ];
    contactForm: FormGroup = new UntypedFormGroup({
        name: new FormControl(''),
        email: new FormControl('', Validators.email),
        message: new FormControl(''),
    });

    // 28.386648098410983, 77.35421579702427

    constructor() {}

    ngOnInit(): void {}

    onSubmit($event: any): void {
        $event.preventDefault();
        console.log(this.contactForm.value);
    }
}
