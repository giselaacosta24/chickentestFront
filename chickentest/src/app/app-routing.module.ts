import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EggsComponent } from './components/eggs/eggs.component';
import { ChickensComponent } from './components/chickens/chickens.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EggFormComponent } from './components/egg-form/egg-form.component';
import { ChickenFormComponent } from './components/chicken-form/chicken-form.component';
import { FarmFormComponent } from './components/farm-form/farm-form.component';
import { FarmChickenComponent } from './components/farm-chicken/farm-chicken.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'principal'},
  { path: 'eggs', component: EggsComponent },
  { path: 'chickens', component: ChickensComponent },
  {path: 'principal', component: PrincipalComponent},
  {path: 'eggs/form', component: EggFormComponent},
  {path: 'chickens/form', component: ChickenFormComponent},
  {path: 'chickens/form/:id', component: ChickenFormComponent},
  {path: 'eggs/form/:id', component: EggFormComponent},
  {path: 'farms/form', component:FarmFormComponent},
  {path: 'farms/form/:id', component: FarmFormComponent},
  {path: 'granja', component: FarmChickenComponent}





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
