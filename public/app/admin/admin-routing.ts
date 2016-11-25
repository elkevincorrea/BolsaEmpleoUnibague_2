import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { GraduadosComponent }   from './graduados.component';
import { EmpresasComponent }   from './empresas.component';
import {VacantesComponent} from './vacantes.component';
import {PostulacionesComponent} from'./postulaciones.component';

const adminRoutes: Routes = [
{ path:'tabla-empresas', component: EmpresasComponent},
{ path:'tabla-graduados', component: GraduadosComponent},
{path: 'tabla-vacantes', component: VacantesComponent},
{path:'tabla-postulaciones', component: PostulacionesComponent},
{path:'', component: GraduadosComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
    
})
export class AdminRoutingModule { }
