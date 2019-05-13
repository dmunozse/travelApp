import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-travel-guide-page',
  templateUrl: './travel-guide-page.component.html',
  styleUrls: ['./travel-guide-page.component.scss']
})
export class TravelGuidePageComponent implements OnDestroy {

  constructor(private renderer: Renderer2) { 
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

}
