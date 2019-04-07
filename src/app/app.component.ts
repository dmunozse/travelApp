import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, animateChild, group, query, style, transition, trigger, stagger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
    trigger('routeAnimations', [
      transition('* => HomePage', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ opacity:0,  transform: 'translateX(-100%)', 'background-color':'red'})
        ]),
        group([
          query(':leave', [
            animate('1000ms ease-out', style({ opacity:0,  transform: 'translateX(100%)', 'background-color':'blue' }))
          ], { optional: true }),
          query(':enter', group([
            animate('1000ms ease-out', style('*'))
          ]), { delay: 500 })
        ]),
        query(':enter', animateChild())
      ]),
      transition('HomePage => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':enter', [
          style({ opacity:0,  transform: 'translateX(100%)', 'background-color':'red'})
        ]),
        query(':leave', [
          query('.title', [
            style('*'),
            stagger(-30, [
              animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translateY(-100px)' }))
            ])
          ]),
          animate('1000ms ease-out', style({ transform: 'translateX(-100%)', 'background-color':'blue' })),
          animateChild()
        ]),
        group([
          query(':enter',[
            animate('1000ms ease-out', style('*'))
          ])
        ]),
        query(':enter', animateChild())
      ]),
      transition('* => ContinentsPage', [
        query(':enter', animateChild())
      ]),
      transition('* => *', [])
    ])
  ]
})
export class AppComponent  {
  name = 'Travel App';

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
