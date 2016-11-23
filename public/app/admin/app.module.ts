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

@NgModule({
  imports:      [ BrowserModule, AdminRoutingModule ],
  declarations: [ 
     AdminComponent, SideNavAdminComponent, NavbarTopComponent, NavbarDefaultComponent, GraduadosComponent, EmpresasComponent, VacantesComponent
  ],
  bootstrap:    [AdminComponent ]
})
export class AppModule { }