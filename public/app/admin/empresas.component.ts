import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../services/companies.service';

export class Empresa{

    identificacion: number;
    tipo_identificacion: string;
    nombre: string;
    pagina_web: string;
    telefono: number;
    estado: boolean;
}

const EMPRESAS: Empresa[] = [
    {identificacion: 900102012, tipo_identificacion: 'NIT', nombre:'Icetex', pagina_web:'icetex.com', telefono: 312116546, estado:true},
    {identificacion: 900138560, tipo_identificacion: 'NIT', nombre:'MiEmpresa', pagina_web:'miempresa.com', telefono: 35116546, estado:false},
    {identificacion: 9339101, tipo_identificacion: 'CC', nombre:'Jacinto Perez', pagina_web:null, telefono: 2716546, estado:false},
    {identificacion: 900898111, tipo_identificacion: 'NIT', nombre:'Icetex', pagina_web:'icetex.com', telefono: 255546, estado:false},
    {identificacion: 904389009, tipo_identificacion: 'NIT', nombre:'Incauca', pagina_web:'incauca.com', telefono: 11416546, estado:false}
]

@Component({
   
    selector: 'empresas-admin',
    templateUrl: '/app/templates/tabla-empresas.component.html'
})
export class EmpresasComponent implements OnInit {
    empresas: any[];
    errorMessage = '';

    constructor(private companyService: CompanyService){}

    ngOnInit(){
        this.getCompanies();
    }

    getCompanies(){
        this.companyService.getCompanies().subscribe(
            companies => this.empresas = companies,
            error => this.errorMessage = <any>error
        );
    }

    confirm(empresa: any){
        empresa.confirmed = true;
    }
}