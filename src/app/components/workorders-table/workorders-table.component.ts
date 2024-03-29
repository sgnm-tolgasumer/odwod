import { WorkordersTableService } from './../../shared/services/workorders-table.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WorkOrders } from 'src/app/shared/services/workorders';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AuthService } from "../../shared/services/auth.service";
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { WorkorderTransferService } from './../../shared/services/workorder-transfer.service';


@Component({
  selector: 'app-workorders-table',
  templateUrl: './workorders-table.component.html',
  styleUrls: ['./workorders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkordersTableComponent implements OnInit {

  ELEMENT_DATA: WorkOrders[];
  displayedColumns: string[] = ['workOrderId', 'title', 'type', 'addressCity', 'addressDistrict'];
  dataSource;
  expandedElement: WorkOrders | null;

  constructor(private service: WorkordersTableService, public authService: AuthService, public dialog: MatDialog, private _snackBar: MatSnackBar, private workorderTransfer:WorkorderTransferService) { }

  workOrderToTransfer: any;


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<WorkOrders>(this.ELEMENT_DATA);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  /**
   * It will call the service which sends http request according to worker's uid. That's why user's uid forwarded as a parameter.
   */
  getAllReports() {
    var uid;
    this.authService.afAuth.onAuthStateChanged(function (user) {
      if (user) {
        uid = user.uid;
      } else {

        // No user is signed in.
      }
    }).then((value) => {
      setTimeout(() => {
        let resp = this.service.workorderList(uid);
        resp.subscribe(report => this.dataSource.data = report as WorkOrders[]);
      }, 1500);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTheJobButtonClick(workOrder: any) {
    workOrder["workerId"] = this.authService.getCurrentUser().uid;
    this.service.getTheJob(workOrder);
    this.refreshTable();
    this.transfer();
    this._snackBar.open('You Got The Job Successfully !!!!', 'Close', {
      duration: 3000
    });
  }

  public transfer(){
    this.workorderTransfer.sendClickEvent();
  }
  
  public refreshTable(){
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<WorkOrders>(this.ELEMENT_DATA);
    }, 1500);
  }
}

@Component({
  selector: 'workorderscontent',
  templateUrl: 'workorderscontent.html',
})
export class workorderscontent { }
