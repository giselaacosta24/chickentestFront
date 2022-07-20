import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EggsComponent } from './components/eggs/eggs.component';
import { ChickensComponent } from './components/chickens/chickens.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EggFormComponent } from './components/egg-form/egg-form.component';
import { ChickenFormComponent } from './components/chicken-form/chicken-form.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'principal'},
  { path: 'eggs', component: EggsComponent },
  { path: 'chickens', component: ChickensComponent },
  {path: 'principal', component: PrincipalComponent},
  {path: 'eggs/form', component: EggFormComponent},
  {path: 'chickens/form', component: ChickenFormComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
