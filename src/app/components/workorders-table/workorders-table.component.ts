import { WorkordersTableService } from './../../shared/services/workorders-table.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {FormControl, Validators} from '@angular/forms';
import { WorkOrders } from 'src/app/shared/services/workorders';
@Component({
  selector: 'app-workorders-table',
  templateUrl: './workorders-table.component.html',
  styleUrls: ['./workorders-table.component.css']
})
export class WorkordersTableComponent implements OnInit {

  ELEMENT_DATA : WorkOrders[];
  displayedColumns: string[] = ['id', 'title', 'type', 'addressCity', 'addressDistrict'];
  dataSource;

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

}
