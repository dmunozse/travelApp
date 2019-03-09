import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }

  getCountry(url: string): Observable<Country> {
    return of(COUNTRIES.find(country => country.url === url));
  }
}
