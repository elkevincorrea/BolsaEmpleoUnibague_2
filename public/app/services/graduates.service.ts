import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Person }           from './../models/models.js';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GraduateService {
    private graduatesURL = '/bolsa-empleo/graduates';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getGraduates():Observable<any[]> {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.get(this.graduatesURL, options)
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
}