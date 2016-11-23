import { Component } from '@angular/core';

export class Vacante{
    nombre_empresa: string;
    cargo: string;
    salario: number;
    fecha_creacion: string;
    fecha_finalizacion: string;
}

const VACANTES: Vacante[]= [
 {nombre_empresa: 'los socios', cargo: 'ñero en serie', salario: 5000000, fecha_creacion: '22/11/2016', fecha_finalizacion: '12/12/2016' },
{nombre_empresa: 'otra_empresa', cargo: ' por definir', salario: 152000, fecha_creacion: '22/11/2016', fecha_finalizacion: '1/12/2016' }
]



@Component({
    
    selector: 'vacantes-admin',
    templateUrl: '/app/templates/tabla-vacantes.component.html'
})
export class VacantesComponent  {
    vacantes = VACANTES;    
}