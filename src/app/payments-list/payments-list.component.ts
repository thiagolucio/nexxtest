import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {PaymentsList} from './payments-list';
import {PaymentsListService} from './payments-list.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subscriber } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

  public colSize = 12;
  public isMobile = false;

  paymentListArray = [];
  dataSource: any;
  data: any;
  public errorMsg: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[] = [
  'pagador',
  'beneficiario',
  'detalhes'
  ];

  constructor(breakpointObserver: BreakpointObserver, private paymentListService: PaymentsListService, private router: Router) {

    // Metodo observable do breakpoint do layout
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
        this.isMobile = result.matches;
        if (this.isMobile) {
          this.colSize = 1;
        } else {
          this.colSize = 12;
        }
    });
  }

  ngOnInit() {
    this.paymentListService.getTransferList()
    .subscribe((data: PaymentsList[]) => {
      this.paymentListArray = data;
      data = this.paymentListArray;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export class PaymentListDataSource extends DataSource<any> {
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor(private paymentListService: PaymentsListService) {
    super();
  }

  connect(): Observable<PaymentsList[]> {
    return this.paymentListService.getTransferList();
  }
  disconnect() { }
}
