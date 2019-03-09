import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Continent } from './continent';
import { CONTINENTS } from './mock-continents';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  constructor() { }

  getContinents(): Observable<Continent[]> {
    return of(CONTINENTS);
  }
}
