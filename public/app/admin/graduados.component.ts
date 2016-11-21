import { Component } from '@angular/core';

export class Graduado {
    identification: number;
    first_name: string;
    last_name: string;
}

const GRADUADOS: Graduado[] = [
    {identification: 1000000, first_name: 'John', last_name: 'Doe'},
    {identification: 1000001, first_name: 'Daniel', last_name: 'Perez'}
]

@Component({
   
    selector: 'graduados-admin',
    templateUrl: '/app/templates/tabla-graduados.component.html'
})
export class GraduadosComponent  {
    graduados = GRADUADOS;
}