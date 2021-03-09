import { WorkordersTableService } from './../../shared/services/workorders-table.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WorkOrders } from 'src/app/shared/services/workorders';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-workorders-table',
  templateUrl: './workorders-table.component.html',
  styleUrls: ['./workorders-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WorkordersTableComponent implements OnInit {

  ELEMENT_DATA : WorkOrders[];
  displayedColumns: string[] = [ 'title', 'type', 'addressCity', 'addressDistrict'];
  dataSource;
  expandedElement: WorkOrders | null;

  constructor(private service:WorkordersTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<WorkOrders>(this.ELEMENT_DATA);
    this.getAllReports();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllReports(){
    let resp=this.service.workorderList();
    resp.subscribe(report =>this.dataSource.data=report as WorkOrders[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTheJobButtonClick(workOrder: any){
    var toReplaced = /\"status\":0/gi;
    var workOrderJson = JSON.stringify(workOrder).replace(toReplaced, "\"status\":1" );
    var json = JSON.parse(workOrderJson);
    this.service.getTheJob(json);
  }
}
