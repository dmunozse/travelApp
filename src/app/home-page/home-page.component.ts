import { Component, HostBinding } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.david', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class HomePageComponent {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  constructor() { }

}
