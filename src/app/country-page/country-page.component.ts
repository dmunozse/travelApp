import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, animate, style, query, group, state } from '@angular/animations';

import { Country } from '../country';
import { CountryService} from '../country.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.country-name h3', [
          style({opacity: 0, transform: 'translateY(-100px)', 'text-shadow': 'none'}),
          group([
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' })),
            animate('500ms ease-out', style({ 'text-shadow': '7px 7px rgba(0, 0, 0, 0.25)' }))
          ])
        ])
      ]),
      transition(':leave', [
        query('.country-name h3', [
          animate('500ms ease-out', style({opacity: 0, transform: 'translateY(-100px)', 'text-shadow': 'none'}))
        ])
      ])
    ]),
    trigger('openClose', [
      state('open', style({
        'max-height': '400px'
      })),
      state('closed', style({
        'max-height': 0
      })),
      transition('* => *', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class CountryPageComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  public isExpanded = false;
  public toggleText = 'Leer más';

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

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.toggleText = !this.isExpanded ? 'Leer más' : 'Leer menos';
  }

}