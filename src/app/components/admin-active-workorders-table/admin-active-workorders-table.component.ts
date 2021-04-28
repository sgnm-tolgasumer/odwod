import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WorkOrders } from 'src/app/shared/services/workorders';
import { WorkordersTableService } from 'src/app/shared/services/workorders-table.service';


@Component({
  selector: 'app-admin-active-workorders-table',
  templateUrl: './admin-active-workorders-table.component.html',
  styleUrls: ['./admin-active-workorders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminActiveWorkordersTableComponent implements OnInit {

  ELEMENT_DATA: WorkOrders[];
  displayedColumns: string[] = ['workOrderId', 'title', 'type', 'addressCity', 'addressDistrict'];
  dataSource;
  expandedElement: WorkOrders | null;
  workOrderStatus = "In Progress";

  constructor(private service: WorkordersTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<WorkOrders>(this.ELEMENT_DATA);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllActiveWorkOrders();
  }

  getAllActiveWorkOrders() {
    let resp = this.service.getAllActiveWorkOrders();
    resp.subscribe(report => this.dataSource.data = report as WorkOrders[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
