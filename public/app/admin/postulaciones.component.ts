import { Component, OnInit } from '@angular/core';

export class Postulacion{
    id_postulacion: number;
    nombre_empresa: string;
    cargo: string;
    nombre_graduado: string;
    estado:boolean;
}

const POSTULACIONES: Postulacion[]=[
{ id_postulacion:15, nombre_empresa:'Playa Hawai', nombre_graduado:'Nicolas Villamil', cargo:'Desarrollador de Software', estado: true},
{ id_postulacion:15, nombre_empresa:'Playa Hawai', nombre_graduado:'Kevin Joan Correa', cargo:'Desarrollador de Software', estado: true},
{ id_postulacion:15, nombre_empresa:'Playa Hawai', nombre_graduado:'Jaime Alexander Bartolo', cargo:'Contador', estado: true}
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