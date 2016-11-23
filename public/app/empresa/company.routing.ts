import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VacantesComponent } from './vacantes.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vacantes', component: VacantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule { }