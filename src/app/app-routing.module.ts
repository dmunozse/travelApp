import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContinentsPageComponent } from './continents-page/continents-page.component';
import { CountryPageComponent } from './country-page/country-page.component';

const routes: Routes = [
  { path: 'countries', component: ContinentsPageComponent },
  { path: 'countries/:country-url', component: CountryPageComponent},
  { path: '', redirectTo: '/countries', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
