import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule
  ],
  exports: [
    CommonModule,
    LayoutModule,
    MatGridListModule
  ],
  declarations: [],
  entryComponents: [],
})
export class MaterialModule { }
