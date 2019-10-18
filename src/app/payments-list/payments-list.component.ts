import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PaymentsList } from './payments-list';
import { PaymentsListService } from './payments-list.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subscriber } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PaymentDetailComponent } from '../payment-detail/payment-detail.component';


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


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = [
    'pagador',
    'beneficiario',
    'status',
    'valor',
    'acao'
  ];

  constructor(
    breakpointObserver: BreakpointObserver, 
    private paymentListService: PaymentsListService, 
    private router: Router,
    public dialog:MatDialog
    ) {

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

  openDialog() {
    this.dialog.open(PaymentDetailComponent);
  }


  ngOnInit() {
    this.bringData();
  }

  bringData(): void {
    this.paymentListService.getTransferList()
    .subscribe((res: any) => {        
      this.paymentListArray = res.data;        
      console.log('res is ', res.data);
      this.dataSource = new MatTableDataSource(this.paymentListArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => {
      alert("ERROR");
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
