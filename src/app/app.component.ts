import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, animateChild, group, query, style, transition, trigger, stagger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    trigger('routeAnimations', [
      transition('* => HomePage', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', [
          style({ opacity:0,  transform: 'translateX(-100%)' })
        ]),
        query(':leave', [
          animateChild()
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1500ms cubic-bezier(.35,0,.55,1)', style({ opacity:0,  transform: 'translateX(100%)' }))
          ], { optional: true }),
          query(':enter', group([
            animate('1500ms cubic-bezier(.35,0,.55,1)', style('*'))
          ]))
        ]),
        query(':enter', animateChild())
      ]),
      transition('HomePage => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', [
          style({ opacity:0,  transform: 'translateX(100%)' })
        ]),
        query(':leave', [
          animateChild()
        ]),
        group([
          query(':leave', [
            animate('1500ms cubic-bezier(.35,0,.55,1)', style({ opacity:0, transform: 'translateX(-100%)' })),
          ]),
          query(':enter',[
            animate('1500ms cubic-bezier(.35,0,.55,1)', style('*'))
          ])
        ]),
        query(':enter', animateChild())
      ]),
      transition('CountryPage => ContinentsPage', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', [
          style({ opacity:0,  transform: 'translateX(-100%)' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('1500ms cubic-bezier(.35,0,.55,1)', style({ opacity:0,  transform: 'translateX(100%)' }))
          ], { optional: true }),
          query(':enter', group([
            animate('1500ms cubic-bezier(.35,0,.55,1)', style('*'))
          ]))
        ]),
        query(':enter', animateChild())
      ]),
      transition('ContinentsPage => CountryPage', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', [
          style({ opacity:0,  transform: 'translateX(100%)' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('1500ms cubic-bezier(.35,0,.55,1)', style({ opacity:0,  transform: 'translateX(-100%)' }))
          ], { optional: true }),
          query(':enter', group([
            animate('1500ms cubic-bezier(.35,0,.55,1)', style('*'))
          ]))
        ]),
        query(':enter', animateChild())
      ]),
      transition('* => ContinentsPage', [
        query(':enter', animateChild())
      ]),
      transition('* => CountryPage', [
        query(':enter', animateChild())
      ]),
      transition('* => *', [])
    ])
  ]
})
export class AppComponent  {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  name = 'Travel App';

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

  areAnimationsDisabled() {
    return this.animationsDisabled;
  }

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
