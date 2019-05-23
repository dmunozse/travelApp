import { Component, HostBinding } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.animate-logo', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ]),
      transition(':leave', [
        query('.animate-logo', [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translateY(-100px)' }))
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
