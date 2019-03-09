import { Component, OnInit, Input } from '@angular/core';

import { Country } from '../country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit() {
  }

}