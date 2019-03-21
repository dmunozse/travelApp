import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [ 
    MatCardModule, 
    MatGridListModule,
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule 
  ],
  imports: [ 
    MatCardModule, 
    MatGridListModule,
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule 
  ]
})
export class AppMaterialModule { }
