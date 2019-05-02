import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
