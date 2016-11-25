import { Injectable } from '@angular/core';
import { Vacancy, Company, Job } from './../models/models';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

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
    private vacancyURL = '/bolsa-empleo/vacancies';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getVacancies():Observable<any[]> {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.get(this.vacancyURL, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any){
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getVacanciesCompany():Promise<Vacancy[]>{
        return Promise.resolve(VACANTES);
    }

    getVacancy(id: number): Promise<Vacancy> {
        return this.getVacanciesCompany()
                    .then(vacancies => vacancies.find(vacancy => vacancy.id == id));
    }
}