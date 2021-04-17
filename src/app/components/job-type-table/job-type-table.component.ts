import { JobTypeTableService } from './../../shared/services/job-type-table.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import { JobTypes } from 'src/app/shared/services/jobtypes';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-job-type-table',
  templateUrl: './job-type-table.component.html',
  styleUrls: ['./job-type-table.component.css']
})
export class JobTypeTableComponent implements OnInit {
  JOB_TYPES: JobTypes[];
  displayedColumns: string[] = ['id', 'workType'];
  dataSource;
  constructor(private service: JobTypeTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<JobTypes>(this.JOB_TYPES);
    this.getAllJobTypes();
  }
  /*
  It gets all job types via the job-type-table service's jobTypeList() function.
  */
  public getAllJobTypes() {
    let resp = this.service.jobTypeList();
    resp.subscribe(report => this.dataSource.data = report as JobTypes[]);
  }

  /*
  It calls the job-type-table service's addJobType() function to add new job types.
  */
  public addJobType(name: string) {
    var jobType = "{\"workType\": \""+ name +"\" }";
    console.log(jobType);
    this.service.addJobType(jobType);
  }

  /*
  It calls the job-type-table service's deleteJobType() function to delete job type with given id.
  */
  public deleteJobType(id: string){
    this.service.deleteJobType(id);
  }

  /*The sorting regarding the alphabetical and numerical values of the table*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
