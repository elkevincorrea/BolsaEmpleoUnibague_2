import { Component, OnInit } from '@angular/core';
import { VacancyService } from './../services/vacancy.service';

export class Vacante{
    nombre_empresa: string;
    cargo: string;
    salario: number;
    fecha_creacion: string;
    fecha_finalizacion: string;
}

const VACANTES: Vacante[]= [
 {nombre_empresa: 'Playa Hawai', cargo: 'Desarrollador de Software', salario: 2500000, fecha_creacion: '22/11/2016', fecha_finalizacion: '12/12/2016' },
 {nombre_empresa: 'Playa Hawai', cargo: 'Contador', salario: 3000000, fecha_creacion: '22/11/2016', fecha_finalizacion: '12/12/2016' },
 {nombre_empresa: 'Playa Hawai', cargo: 'Asesor Financiero', salario: 5000000, fecha_creacion: '10/9/2016', fecha_finalizacion: '12/12/2016' },
 {nombre_empresa: 'Playa Hawai', cargo: 'Analista de software', salario: 5000000, fecha_creacion: '22/11/2016', fecha_finalizacion: '12/12/2016' },
 {nombre_empresa: 'Icetex', cargo: 'Asesor Internacional', salario: 152000, fecha_creacion: '22/11/2016', fecha_finalizacion: '1/12/2016' }
]



@Component({
    
    selector: 'vacantes-admin',
    templateUrl: '/app/templates/tabla-vacantes.component.html',
    providers: [VacancyService]
})
export class VacantesComponent implements OnInit {
    vacantes : any;
    errorMessage = '';
    constructor(private vacancyService: VacancyService){}

    ngOnInit(){
        this.getVacancies();
    }

    getVacancies(){
        this.vacancyService.getVacancies().subscribe(
            companies => this.vacantes = companies,
            error => this.errorMessage = <any>error
        );
    }
}
