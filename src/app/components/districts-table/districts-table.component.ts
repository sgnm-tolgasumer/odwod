import { DistrictsTableService } from './../../shared/services/districts-table.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Districts } from 'src/app/shared/services/districts';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-districts-table',
  templateUrl: './districts-table.component.html',
  styleUrls: ['./districts-table.component.css']
})
export class DistrictsTableComponent implements OnInit {
  DISTRICT_NAMES: Districts[];
  displayedColumns: string[] = ['districtName'];
  dataSource;

  constructor(private service: DistrictsTableService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Districts>(this.DISTRICT_NAMES);
    this.getAllDistricts();
  }

  /*
  It gets all districts via the districts-table service's districtsList() function.
  */
  public getAllDistricts() {
    setTimeout(() => {
      let resp = this.service.districtsList();
      resp.subscribe(report => this.dataSource.data = report as Districts[]);
    }, 1000);
  }

  /*
  It calls the districts-table service's addDistrict() function to add new districts.
  */
  public addDistrict(name: string) {
    if ( name === ''){
      this._snackBar.open('District Field Cannot be Empty', 'Close', {
        duration: 3000
      });
    }else{
      var district = "{\"districtName\": \"" + name + "\" }";
      this.service.addDistrict(district);
      this.getAllDistricts();
      this.dataSource = new MatTableDataSource<Districts>(this.DISTRICT_NAMES);
      this._snackBar.open('New District Added Successfully', 'Close', {
        duration: 3000
      });
      this.clearAddInput();

    }
  }

  /*
  It calls the districts-table service's deleteDistrict() function to delete district with given id.
  */
  public deleteDistrict(id: string) {

    this.service.deleteDistrict(id);
    this.getAllDistricts();
    this.dataSource = new MatTableDataSource<Districts>(this.DISTRICT_NAMES);
    this._snackBar.open('District Deleted Successfully', 'Close', {
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

  @ViewChild('addName') addNameInput: ElementRef;

  clearAddInput(){
    this.addNameInput.nativeElement.value = '';
  }

}
