import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

import { Continent } from '../continent';
import { ContinentService } from '../continent.service';

import { Country } from '../country';
import { CountryService } from '../country.service';

import { ContinentPipe } from '../continent.pipe';
import { CountryPipe } from '../country.pipe';

const CONTINENT_FILTER = new ContinentPipe();
const COUNTRY_FILTER = new CountryPipe();

function filterCountriesByContinent(countries: any, continentId: string): any[] {
  return CONTINENT_FILTER.transform(countries, continentId);
}

function filterCountriesByName(countries: any, name: string): any[] {
  return COUNTRY_FILTER.transform(countries, name);
}

@Component({
  selector: 'app-continents-page',
  templateUrl: './continents-page.component.html',
  styleUrls: ['./continents-page.component.scss'],
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ])
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ])
    ])
  ]
})
export class ContinentsPageComponent implements OnInit {
  continents: Continent[];
  selectedContinent: Continent;

  countries: Country[];

  private _filteredCountries: any[] = [];
  public countriesDisplayed = -1;

  constructor(
    private continentService: ContinentService, 
    private countryService: CountryService) 
  { }

  ngOnInit() {
    this.getContinents();
    this.getCountries();
    this.updateContinent(this.continents[0]);
  }

  getContinents() {
    this.continentService.getContinents()
      .subscribe(continents => this.continents = continents);
  }

  getCountries() {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  getFilteredCountries() {
    return this._filteredCountries;
  }

  isActiveContinent(continent: Continent) {
    return continent === this.selectedContinent;
  }

  searchCountry(country: string) {
    country = country ? country.trim() : '';

    this.updateContinent(this.selectedContinent);
    this.updateCountryList(country);

    const newTotal = this._filteredCountries.length;
    if (this.countriesDisplayed != newTotal) {
      this.countriesDisplayed = newTotal;
    } else if (!country) {
      this.countriesDisplayed = -1;
    }
  }

  updateContinent(continent: Continent) {
    this.selectedContinent = continent;
    this._filteredCountries = filterCountriesByContinent(this.countries, this.selectedContinent.id);
  }

  updateCountryList(name: string) {
    this._filteredCountries = filterCountriesByName(this._filteredCountries, name);
  }

}