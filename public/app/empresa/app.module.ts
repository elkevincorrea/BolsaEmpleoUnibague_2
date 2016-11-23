import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyRoutingModule } from './company.routing'
import { SideNavCompanyComponent } from './sidenav.component';
import { NavbarTopComponent } from '../shared/navbar.top';
import { NavbarDefaultComponent } from '../shared/navbar.component';
import { CompanyComponent } from './panel.company.component';
import { HomeComponent } from './home.component';
import { VacantesComponent } from './vacantes.component'

@NgModule({
  imports:      [ BrowserModule, CompanyRoutingModule ],
  declarations: [ 
     CompanyComponent, SideNavCompanyComponent, NavbarTopComponent, NavbarDefaultComponent, HomeComponent, VacantesComponent
  ],
  bootstrap:    [ CompanyComponent ]
})
export class AppModule { }