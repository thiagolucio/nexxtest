import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component'; 

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
  MatTooltipModule,
  MatDialogModule
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
    MatTooltipModule,
    MatDialogModule
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
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: [],
  entryComponents: [PaymentDetailComponent],
})
export class MaterialModule { }
