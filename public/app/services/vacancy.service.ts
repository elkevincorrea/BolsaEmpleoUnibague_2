import { Injectable } from '@angular/core';
import { Vacancy, Company, Job } from './../models/models'

const EMPRESAS: Company[] = [
    { name: 'Empresa1' }
]

const CARGOS: Job[] = [
    {name: 'Cargo1', description: 'description'},
    {name: 'Cargo2', description: 'description 2'}
]

const VACANTES: Vacancy[] = [
    { id: 1, created_at: '1/1/2016', Job: CARGOS[1], salary: 600000, end_date: '1/12/2016'},
    { id: 2, created_at: '1/1/2016', Job: CARGOS[0], salary: 603000, end_date: '1/11/2016'},
    { id: 3,created_at: '1/1/2016', Job: CARGOS[1], salary: 602000, end_date: '1/9/2016'},
    { id: 4, created_at: '1/1/2016', Job: CARGOS[0], salary: 601000, end_date: '1/2/2016'},
];
@Injectable()
export class VacancyService {
    constructor() { }

    getVacancies():Promise<Vacancy[]>{
        return Promise.resolve(VACANTES);
    }

    getVacancy(id: number): Promise<Vacancy> {
        return this.getVacancies()
                    .then(vacancies => vacancies.find(vacancy => vacancy.id == id));
    }
}