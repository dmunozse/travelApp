import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContinentsPageComponent } from './continents-page/continents-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { CountryPipe } from './country.pipe';
import { ContinentPipe } from './continent.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContinentsPageComponent, CountryPageComponent, CountryPipe, ContinentPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
