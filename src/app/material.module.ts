import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatGridListModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [],
  entryComponents: [],
})
export class MaterialModule { }
