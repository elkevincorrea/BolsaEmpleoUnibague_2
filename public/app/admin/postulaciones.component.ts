import { Component, OnInit } from '@angular/core';

export class Postulacion{
    id_postulacion: number;
    nombre_empresa: string;
    cargo: string;
    nombre_graduado: string;
    estado:boolean;
}

const POSTULACIONES: Postulacion[]=[

{ id_postulacion:15, nombre_empresa:'Kvsndv', nombre_graduado:'Villa', cargo:'Ing Software', estado: true},
{ id_postulacion:1, nombre_empresa:'asociados cds', nombre_graduado:'Camilo', cargo:'Ing industrial', estado: false}

]



@Component({
    moduleId: module.id,
    selector: 'postulaciones-admin',
    templateUrl: '/app/templates/tabla-postulaciones.component.html'
})
export class PostulacionesComponent implements OnInit {
    constructor() { }
    postulaciones = POSTULACIONES;
    ngOnInit() { }


}