import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(countries: any[], name: string): any[] {
    name = name ? name.trim() : '';

    if (!name) return countries;

    return countries.filter(function (country) {
      return country.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    });
  }

}