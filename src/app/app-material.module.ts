import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [ MatIconModule, MatToolbarModule ],
  imports: [ MatIconModule, MatToolbarModule ]
})
export class AppMaterialModule { }
