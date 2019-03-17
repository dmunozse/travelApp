import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [ MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule ],
  imports: [ MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule ]
})
export class AppMaterialModule { }
