import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EggsComponent } from './components/eggs/eggs.component';
import { ChickensComponent } from './components/chickens/chickens.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EggFormComponent } from './components/egg-form/egg-form.component';
import { ChickenFormComponent } from './components/chicken-form/chicken-form.component';
import { FarmsComponent } from './components/farms/farms.component';
import { FarmFormComponent } from './components/farm-form/farm-form.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { ParametrosFormComponent } from './components/parametros-form/parametros-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EggsComponent,
    ChickensComponent,
    NavbarComponent,
    PrincipalComponent,
    EggFormComponent,
    ChickenFormComponent,
    FarmsComponent,
    FarmFormComponent,
    ComprasComponent,
    VentasComponent,
    TransactionsComponent,
    AdministradorComponent,
    ParametrosComponent,
    ParametrosFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
