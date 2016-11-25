import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminRoutingModule} from './admin-routing'
import {AdminComponent } from './panel-admin';
import { SideNavAdminComponent } from './sidenav.component'
import { NavbarTopComponent } from '../shared/navbar.top'
import { NavbarDefaultComponent } from '../shared/navbar.component';
import { GraduadosComponent }   from './graduados.component';
import { EmpresasComponent }   from './empresas.component';
import {VacantesComponent} from './vacantes.component';
import {PostulacionesComponent} from'./postulaciones.component';
import { CompanyService } from './../services/companies.service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, AdminRoutingModule, HttpModule, JsonpModule ],
  declarations: [ 
     AdminComponent, SideNavAdminComponent, NavbarTopComponent, NavbarDefaultComponent, 
     GraduadosComponent, EmpresasComponent, VacantesComponent,PostulacionesComponent
  ],
  providers: [CompanyService],
  bootstrap:    [AdminComponent ]
})
export class AppModule { }