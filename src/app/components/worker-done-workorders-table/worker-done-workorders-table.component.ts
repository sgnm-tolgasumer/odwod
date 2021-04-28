import { WorkordersTableService } from './../../shared/services/workorders-table.service';
import { WorkOrders } from './../../shared/services/workorders';
import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-worker-done-workorders-table',
  templateUrl: './worker-done-workorders-table.component.html',
  styleUrls: ['./worker-done-workorders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkerDoneWorkordersTableComponent implements OnInit {

  ELEMENT_DATA: WorkOrders[];
  displayedColumns: string[] = ['workOrderId', 'title', 'type', 'addressCity', 'addressDistrict'];
  dataSource;
  expandedElement: WorkOrders | null;
  workOrderStatus = "Done";

  constructor(public authService: AuthService, private service: WorkordersTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<WorkOrders>(this.ELEMENT_DATA);
  }


  getAllDoneWorkerWorkOrders() {
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
        let resp = this.service.getAllDoneWorkerWorkOrders(uid);
        resp.subscribe(report => this.dataSource.data = report as WorkOrders[]);
      }, 1000);
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllDoneWorkerWorkOrders();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
