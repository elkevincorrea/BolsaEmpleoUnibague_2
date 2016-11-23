import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service'
import { User } from './../models/models'

@Component({
    selector: 'navbar-landing-page',
    templateUrl: '/app/templates/navbar-landing-page.component.html'
})
export class NavbarLandingPageComponent implements OnInit{
    user: User = new User();
    loading = false;
    error = '';
    
    constructor(private authService: AuthenticationService){ }

    ngOnInit() {
        this.user.type = 'graduate';
        var type = this.authService.logged();
        if(type == 'company'){
            window.location.href = '/empresa'
        }else if(type == 'graduate'){
            window.location.href = '/graduado';
        }else if(type == 'admin'){
            window.location.href = '/admin';
        }
     }

     login() {
        this.loading = true;
        if(this.user.type == 'graduate'){
            this.authService.loginGraduate(this.user.identification, this.user.password)
                .subscribe(result => {
                    if(result === true){
                        console.log('Graduado ok');
                        window.location.href = '/graduado';
                    }else{
                        this.error = 'Usuario o contraseña incorrecta';
                        this.loading = false;
                    }
                });
        }else if(this.user.type == 'company'){
            this.authService.loginCompany(this.user.identification, this.user.password)
                .subscribe(result => {
                    if(result === true){
                        console.log('Compañia ok')
                        window.location.href = '/empresa'
                    }else{
                        this.error = 'Usuario o contraseña incorrecta';
                        this.loading = false;
                    }
                });
        }
    }

    loginAdmin(){
        this.authService.loginAdmin(this.user.identification, this.user.password)
                .subscribe(result => {
                    if(result === true){
                        console.log('Admin ok');
                        window.location.href = '/admin';
                    }else{
                        this.error = 'Usuario o contraseña incorrecta';
                        this.loading = false;
                    }
                });
    }
}