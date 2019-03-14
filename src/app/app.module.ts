import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContinentsPageComponent } from './continents-page/continents-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { CountryPipe } from './country.pipe';
import { ContinentPipe } from './continent.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, AppMaterialModule ],
  declarations: [ AppComponent, HelloComponent, ContinentsPageComponent, CountryPageComponent, CountryPipe, ContinentPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
