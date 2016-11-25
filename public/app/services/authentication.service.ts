import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    loginGraduate(identification: number, password: string): Observable<boolean> {
        return this.http.post('/bolsa-empleo/auth/users/graduate', { identification: identification, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response.json());
                let token = response.json() && response.json().token;
                console.log(token);
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ identification: identification, user: 'graduate', token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    loginAdmin(identification: number, password: string): Observable<boolean> {
        return this.http.post('/bolsa-empleo/auth/users/admin', { identification: identification, password: password })
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ identification: identification, user: 'admin', token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    loginCompany(identification: number, password: string): Observable<boolean> {
        return this.http.post('/bolsa-empleo/auth/users/company', { identification: identification, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ identification: identification, user: 'company', token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logged(): string {
        var currentUser = JSON.parse(localStorage.getItem('currentUser')); 
        if (!currentUser) {
            return null;
        }else{
            return currentUser.user; 
        }
        
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}