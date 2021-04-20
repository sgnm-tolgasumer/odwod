import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from "../../shared/services/auth.service";
import { WorkOrders } from 'src/app/shared/services/workorders';
import { WorkordersTableService } from 'src/app/shared/services/workorders-table.service';


@Component({
  selector: 'app-customer-workorders-table',
  templateUrl: './customer-workorders-table.component.html',
  styleUrls: ['./customer-workorders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomerWorkordersTableComponent implements OnInit {

  ELEMENT_DATA: WorkOrders[];
  displayedColumns: string[] = ['workOrderId', 'title', 'type'];
  dataSource;
  expandedElement: WorkOrders | null;
  workOrderStatus: any;


  constructor(public authService: AuthService, private service: WorkordersTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<WorkOrders>(this.ELEMENT_DATA);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllWorkOrdersByCustomer();
  }

  /**
  * It will call the service which sends http request according to customer's uid. 
  * That's why user's uid forwarded as a parameter. 
  */
  getAllWorkOrdersByCustomer() {
    var uid;
    this.authService.afAuth.onAuthStateChanged(function (user) {
      if (user) {

        uid = user.uid;
        //console.log(uid);
      } else {

        // No user is signed in.
      }
    }).then((value) => {
      setTimeout(() => {
        let resp = this.service.workorderListCustomer(uid);
        resp.subscribe(report => this.dataSource.data = report as WorkOrders[]);
      }, 1000);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getWorkOrderStatus(workOrderId: string) {

    this.service.workorderStatus(workOrderId).subscribe((response) => {
      this.workOrderStatus = response;
      return this.workOrderStatus;
    });
  }


}
