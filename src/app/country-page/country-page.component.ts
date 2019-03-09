import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../country';
import { CountryService} from '../country.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  country: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry() {
    const url = this.route.snapshot.paramMap.get('country-url');
    this.countryService.getCountry(url)
      .subscribe(country => this.country = country);
  }

}