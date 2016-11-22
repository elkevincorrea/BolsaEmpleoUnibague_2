import { Component, OnInit } from '@angular/core';
import {Person, Company, User, IdentificationType} from './../models/models';
import { UserService } from './../services/user.service';
import { IdentificationTypeService } from './../services/id_types.service';

@Component({
    selector: 'register-landing',
    templateUrl: '/app/templates/register.component.html',
    providers: [UserService, IdentificationTypeService]
})
export class RegisterLandingComponent implements OnInit{

    errorMessage: string;
    succesMessage: string;
    user: User = new User();
    idtypes: IdentificationType[];

    constructor(private userService: UserService, private idTypesService: IdentificationTypeService) { }

    ngOnInit() {
        this.user.Company = new Company();
        this.user.Company.identification__type_id= null;
        this.getIdTypes();
     }

    switch(option: string) {
        this.user.type = option;
    };

    getIdTypes() {
        this.idTypesService.getIdentificationTypes().subscribe(
            id_types => this.idtypes = id_types,
            error => this.errorMessage = <any>error
        );
    }

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

    submitCompany(){
        this.userService.registerCompanyUser(this.user)
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