import { Component } from '@angular/core';

export class Graduado {
    identification: number;
    first_name: string;
    last_name: string;
    telefono : number;
    email: string;
    genero: string;
}

const GRADUADOS: Graduado[] = [
    {identification: 1000000, first_name: 'John', last_name: 'Doe', telefono:31245, email:'doe@gmail.com',genero:'F'},
    {identification: 1000001, first_name: 'Daniel', last_name: 'Perez', telefono: 123156, email:'doe@gmail.com',genero:'M'}
]

@Component({
   
    selector: 'graduados-admin',
    templateUrl: '/app/templates/tabla-graduados.component.html'
})
export class GraduadosComponent  {
    graduados = GRADUADOS;
}