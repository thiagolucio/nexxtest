import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
 

import { 
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,  
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule, 
  MatInputModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: [],
  entryComponents: [],
})
export class MaterialModule { }
