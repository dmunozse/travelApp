import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continent'
})
export class ContinentPipe implements PipeTransform {

  transform(countries: any[], continentId: string): any[] {
    continentId = continentId ? continentId.trim() : '';

    if (!continentId) return countries;

    return countries.filter(country => {
      return country.continent === continentId;
    });
  }

}