import { Component } from '@angular/core';
import { GraduateService } from './../services/graduates.service';

export class Title{
    id?: number; 
    name?: string;
}

export class Graduado {
    identification: number;
    first_name: string;
    last_name: string;
    telefono : number;
    email: string;
    genero: string;
    title: string;
}

const GRADUADOS: Graduado[] = [
    {identification: 1000000, first_name: 'John', last_name: 'Doe', telefono:31245, email:'doe@gmail.com',genero:'F', title:'Ingenieria Industrial'},
    {identification: 1000001, first_name: 'Nicolas', last_name: 'Villamil', telefono:2666231, email:'nicolasdark@gmail.com',genero:'M', title:'Ingenieria de Sistemas'},
    {identification: 1000002, first_name: 'Kevin Joan', last_name: 'Correa', telefono:31242321, email:'kevinjoan@gmail.com',genero:'M', title:'Ingenieria de Sistemas'},
    {identification: 1000003, first_name: 'Jaime Alexander', last_name: 'Bartolo', telefono:322245, email:'bartolo@gmail.com',genero:'M', title:'Contaduria'},
    {identification: 1000004, first_name: 'Andrea Alexandra', last_name: 'Trujillo', telefono:3151133245, email:'alexa@gmail.com',genero:'F', title:'Ingenieria Mecanica'},
    {identification: 1000005, first_name: 'Daniel', last_name: 'Perez', telefono: 123156, email:'daniel2014perez@gmail.com',genero:'M', title:'Negocios Internacionales'}
]

@Component({
   
    selector: 'graduados-admin',
    templateUrl: '/app/templates/tabla-graduados.component.html',
    providers: [GraduateService]
})
export class GraduadosComponent  {
    graduados: any[];
    errorMessage = '';

    constructor(private graduateService: GraduateService){}

    ngOnInit(){
        this.getGraduates();
    }

    getGraduates(){
        this.graduateService.getGraduates().subscribe(
            graduados => this.graduados = graduados,
            error => this.errorMessage = <any>error
        );
    }
}