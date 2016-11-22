import { Component, OnInit } from '@angular/core';
import {Person, Company, User} from './../models/models';
import { UserService } from './../services/user.service'

@Component({
    selector: 'register-landing',
    templateUrl: '/app/templates/register.component.html',
    providers: [UserService]
})
export class RegisterLandingComponent implements OnInit{

    errorMessage: string;
    succesMessage: string;
    user: User = new User();

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user.Company = new Company();  
     }

    switch(option: string) {
        this.user.type = option;
    };

    submitGraduate(){
        if(this.user.type=='graduate'){
            this.user.Company = null;
        }
        console.log(this.user.identification);
        this.userService.registerGraduateUser(this.user)
                        .subscribe(
                            user => { 
                                this.user = user;
                                this.succesMessage = 'Ya puedes ingresar';
                            },
                            error => this.errorMessage = error
                        );
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }
}