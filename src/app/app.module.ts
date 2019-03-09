import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContinentsPageComponent } from './continents-page/continents-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { CountryPipe } from './country.pipe';
import { ContinentPipe } from './continent.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ContinentsPageComponent, CountryPageComponent, CountryPipe, ContinentPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
