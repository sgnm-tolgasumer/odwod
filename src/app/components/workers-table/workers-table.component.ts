import { WorkersTableService } from './../../shared/services/workers-table.service';
import { Workers } from './../../shared/services/workers';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})
export class WorkersTableComponent implements OnInit {
  WORKERS: Workers[];
  displayedColumns: string[] = ['id', 'name', 'surname', 'mail', 'telephone', 'addressCity',  'userId'];
  dataSource;
  constructor(private service: WorkersTableService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Workers>(this.WORKERS);
    this.getAllWorkers();
  }

  /*
  It gets all Customers via the customer-table service's customersList() function.
  */
  public getAllWorkers() {
    setTimeout(() => {
      let resp = this.service.workersList();
      resp.subscribe(report => this.dataSource.data = report as Workers[]);
    }, 1000);  
  }

  /*
  It calls the customers-table service's deleteJobType() function to delete job type with given id.
  */
  public deleteWorker(id: string){
    this.service.deleteWorker(id);
    this.getAllWorkers();
    this.dataSource = new MatTableDataSource<Workers>(this.WORKERS);
    this._snackBar.open('Worker Deleted Successfully', 'Close', {
      duration: 3000
    });
  }

  /*The sorting regarding the alphabetical and numerical values of the table*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
