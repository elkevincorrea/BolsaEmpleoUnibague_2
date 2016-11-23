import { Component, OnInit } from '@angular/core';

import { Vacancy, Company, Job } from './../models/models'

const EMPRESAS: Company[] = [
    { name: 'Empresa1' }
]

const CARGOS: Job[] = [
    {name: 'Cargo1', description: 'description'},
    {name: 'Cargo2', description: 'description 2'}
]

const VACANTES: Vacancy[] = [
    { created_at: '1/1/2016', Job: CARGOS[1], salary: 600000, end_date: '1/12/2016'},
    { created_at: '1/1/2016', Job: CARGOS[0], salary: 603000, end_date: '1/11/2016'},
    { created_at: '1/1/2016', Job: CARGOS[1], salary: 602000, end_date: '1/9/2016'},
    { created_at: '1/1/2016', Job: CARGOS[0], salary: 601000, end_date: '1/2/2016'},
];

@Component({
    selector: 'panel-vacantes',
    templateUrl: '/app/empresa/templates/vacantes.component.html'
})
export class VacantesComponent implements OnInit {
    private vacancies: Vacancy[];
    constructor() { }

    ngOnInit() {
        this.vacancies = VACANTES;
     }
}