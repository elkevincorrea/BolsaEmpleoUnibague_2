import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VacantesComponent } from './vacantes.component'
import { VacancyDetailComponent } from './vacancy-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vacantes', component: VacantesComponent },
  { path: 'vacancy-detail/:id', component: VacancyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule { }