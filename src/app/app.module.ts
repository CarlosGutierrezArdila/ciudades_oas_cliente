import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { PaisComponent } from './pais/pais.component';
import { baseURL } from './shared/baseURL';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PaisService } from './services/pais.service';
import { CiudadService } from './services/ciudad.service';
import { DynamicFormModule } from 'ngx-dynamic-form';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CiudadComponent,
    PaisComponent,
  ],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,  
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [
    PaisService,
    CiudadService,
    {provide: 'BaseURL', useValue: baseURL}],

  bootstrap: [AppComponent]
})
export class AppModule { }
