import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'navbar-default',
    templateUrl: '/app/templates/navbar.default.html',
    styleUrls: ['../../css/navbar-default.css']
})
export class NavbarDefaultComponent implements OnInit {
    @Input() title: string;

    constructor() { }

    ngOnInit() { }
}