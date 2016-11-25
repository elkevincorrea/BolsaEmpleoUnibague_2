import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Vacancy } from './../models/models';
import { VacancyService } from './../services/vacancy.service';

@Component({
    selector: 'vacancy-detail',
    templateUrl: '/app/empresa/templates/vacancy-detail.component.html'
})
export class VacancyDetailComponent implements OnInit {

    vacancy: Vacancy;

    constructor(private vacancyService: VacancyService,
                private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.vacancyService.getVacancy(params['id']))
                        .subscribe(vacancy => {this.vacancy=vacancy;
                            console.log(JSON.stringify(this.vacancy))});
     }

     goBack() {
        this.location.back();
     }
}