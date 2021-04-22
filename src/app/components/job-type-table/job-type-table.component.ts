import { JobTypeTableService } from './../../shared/services/job-type-table.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import { JobTypes } from 'src/app/shared/services/jobtypes';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-job-type-table',
  templateUrl: './job-type-table.component.html',
  styleUrls: ['./job-type-table.component.css']
})
export class JobTypeTableComponent implements OnInit {
  JOB_TYPES: JobTypes[];
  displayedColumns: string[] = ['workType'];
  dataSource;
  constructor(private service: JobTypeTableService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<JobTypes>(this.JOB_TYPES);
    this.getAllJobTypes();
  }
  /*
  It gets all job types via the job-type-table service's jobTypeList() function.
  */
  public getAllJobTypes() {
    setTimeout(() => {
      let resp = this.service.jobTypeList();
      resp.subscribe(report => this.dataSource.data = report as JobTypes[]);
    }, 1000);
  }

  /*
  It calls the job-type-table service's addJobType() function to add new job types.
  */
  public addJobType(name: string) {
    if ( name === ''){
      this._snackBar.open('Job Type Field Cannot be Empty', 'Close', {
        duration: 3000
      });
    }else {
      var jobType = "{\"workType\": \"" + name + "\" }";
      this.service.addJobType(jobType);
      this.getAllJobTypes();
      this.dataSource = new MatTableDataSource<JobTypes>(this.JOB_TYPES);
      this._snackBar.open('New Job Type Added Successfully', 'Close', {
        duration: 3000
      });
    }
  }

  /*
  It calls the job-type-table service's deleteJobType() function to delete job type with given id.
  */
  public deleteJobType(id: string){
    this.service.deleteJobType(id);
    this.getAllJobTypes();
    this.dataSource = new MatTableDataSource<JobTypes>(this.JOB_TYPES);
    this._snackBar.open('Job Type Deleted Successfully', 'Close', {
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
}
