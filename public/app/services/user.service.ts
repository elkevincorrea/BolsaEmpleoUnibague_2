import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User }           from './../models/models.js';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    private userGraduateURL = '/bolsa-empleo/users/graduates';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    registerGraduateUser(user:User): Observable<User>{
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.userGraduateURL, user, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body.data || {};
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