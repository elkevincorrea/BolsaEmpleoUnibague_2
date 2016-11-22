import { Component } from '@angular/core';

export class Empresa{

    identificacion: number;
    tipo_identificacion: string;
    nombre: string;
    pagina_web: string;
    telefono: number;
    estado: boolean;
}

const EMPRESAS: Empresa[] = [
    {identificacion: 13156, tipo_identificacion: 'nit', nombre:'KECC', pagina_web:'master.com', telefono: 16546, estado:true},
    {identificacion: 13156, tipo_identificacion: 'rut', nombre:'otra', pagina_web:'otra.com', telefono: 11416546, estado:false}
]

@Component({
   
    selector: 'empresas-admin',
    templateUrl: '/app/templates/tabla-empresas.component.html'
})
export class EmpresasComponent  {
    empresas = EMPRESAS;
}