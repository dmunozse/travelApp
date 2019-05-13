import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContinentsPageComponent } from './continents-page/continents-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelGuidePageComponent } from './travel-guide-page/travel-guide-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'countries', component: ContinentsPageComponent, data: {animation: 'ContinentsPage'} },
  { path: 'countries/:country-url', component: CountryPageComponent, data: {animation: 'CountryPage'} },
  { path: 'home', component: HomePageComponent, data: {animation: 'HomePage'} },
  { path: 'travel-guide', component: TravelGuidePageComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ]
})
export class AppRoutingModule { }
