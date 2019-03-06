import { Component, OnInit } from '@angular/core';

import { Continent } from '../continent';
import { CONTINENTS } from '../mock-continents';

import { Country } from '../country';
import { COUNTRIES } from '../mock-countries';

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
  styleUrls: ['./continents-page.component.scss']
})
export class ContinentsPageComponent implements OnInit {
  continents = CONTINENTS;
  selectedContinent: Continent;

  countries = COUNTRIES;
  selectedCountry: Country;

  private _filteredCountries: any[] = [];

  constructor() {
    this.updateContinent(CONTINENTS[0]);
  }

  ngOnInit() {
  }

  isActiveContinent(continent: Continent) {
    return continent === this.selectedContinent;
  }

  updateContinent(continent: Continent) {
    this.selectedContinent = continent;
    this._filteredCountries = filterCountriesByContinent(this.countries, this.selectedContinent.id);
  }

  isActiveCountry(country: Country) {
    return country === this.selectedCountry;
  }

  onSelectCountry(country: Country) {
    this.selectedCountry = country;
  }

  searchCountry(country: string) {
    this.updateContinent(this.selectedContinent);
    this.updateCountryList(country);
  }

  updateCountryList(name: string) {
    this._filteredCountries = filterCountriesByName(this._filteredCountries, name);
  }

  getCountries() {
    return this._filteredCountries;
  }

}