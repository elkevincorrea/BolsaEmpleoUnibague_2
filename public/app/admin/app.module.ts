import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminRoutingModule} from './admin-routing'
import {AdminComponent } from './panel-admin';
import {NavbarDefaultComponent } from '../shared/navbar-default';
import { GraduadosComponent }   from './graduados.component';
import { EmpresasComponent }   from './empresas.component';

@NgModule({
  imports:      [ BrowserModule, AdminRoutingModule ],
  declarations: [ 
     AdminComponent, NavbarDefaultComponent,GraduadosComponent,EmpresasComponent
  ],
  bootstrap:    [AdminComponent ]
})
export class AppModule { }