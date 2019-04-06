import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, animateChild, group, query, style, transition, trigger, stagger } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimations', [
      /*
      transition('* => HomePage', [
        style({ position: 'relative' }),
        query(':enter :leave', style({
          position: 'absolute', top: 0, left: 0, width: '100%'
        })),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100px)', opacity: 0}),
            animate('300ms ease-out', style({ opacity: 1, transform: 'none'})),
            animateChild()
          ])
        ])
      ]),
      transition('* => ContinentsPage', [
        query(':enter', animateChild())
      ]),
      transition('* => *', [])
    ])
    */
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
        query(':leave',
          animate('1000ms ease-out', style({ opacity:0,  transform: 'translateX(100%)', 'background-color':'blue' }))
        ),
        query(':enter', group([
          animate('1000ms ease-out', style('*'))
        ]), { delay: 500 })
      ]),
      query(':enter', animateChild())
    ]),
    transition('HomePage => *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':leave', [
        style({ opacity:1,  transform: 'translateX(0%)', 'background-color':'blue'})
      ]),
      query(':enter', [
        style({ opacity:0,  transform: 'translateX(100%)', 'background-color':'red'})
      ]),
      group([
        query(':leave',
          animate('1000ms ease-out', style({ opacity:0,  transform: 'translateX(-100%)', 'background-color':'blue' }))
        ),
        query(':enter', group([
          animate('1000ms ease-out', style('*'))
        ]), { delay: 500 })
      ]),
      query(':enter', animateChild())
    ]),
    /*
    transition('* => ContinentsPage', [
      query(':enter', animateChild())
    ]),
    */
    //transition('* => *', [])
  ])
  ]
})
export class AppComponent  {
  name = 'Travel App';

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
