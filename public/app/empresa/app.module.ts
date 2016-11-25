import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyRoutingModule } from './company.routing'
import { SideNavCompanyComponent } from './sidenav.component';
import { NavbarTopComponent } from '../shared/navbar.top';
import { NavbarDefaultComponent } from '../shared/navbar.component';
import { CompanyComponent } from './panel.company.component';
import { HomeComponent } from './home.component';
import { VacantesComponent } from './vacantes.component';
import { VacancyDetailComponent } from './vacancy-detail.component';
import { VacancyService } from './../services/vacancy.service';

@NgModule({
  imports:      [ BrowserModule, CompanyRoutingModule ],
  declarations: [ 
     CompanyComponent, SideNavCompanyComponent, NavbarTopComponent, NavbarDefaultComponent, HomeComponent, VacantesComponent, VacancyDetailComponent
  ],
  bootstrap:    [ CompanyComponent ],
  providers: [ VacancyService ]
})
export class AppModule { }