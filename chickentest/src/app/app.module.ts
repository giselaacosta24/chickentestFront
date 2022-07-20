import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    EggsComponent,
    ChickensComponent,
    NavbarComponent,
    PrincipalComponent,
    EggFormComponent,
    ChickenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
