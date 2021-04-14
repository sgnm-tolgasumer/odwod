import { DistrictsTableService } from './../../shared/services/districts-table.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Districts } from 'src/app/shared/services/districts';


@Component({
  selector: 'app-districts-table',
  templateUrl: './districts-table.component.html',
  styleUrls: ['./districts-table.component.css']
})
export class DistrictsTableComponent implements OnInit {
  DISTRICT_NAMES: Districts[];
  displayedColumns: string[] = ['id', 'districtName'];
  dataSource;

  constructor(private service: DistrictsTableService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Districts>(this.DISTRICT_NAMES);
    this.getAllDistricts();
  }

  /*
  It gets all districts via the districts-table service's districtsList() function.
  */
  public getAllDistricts() {
    let resp = this.service.districtsList();
    resp.subscribe(report => this.dataSource.data = report as Districts[]);
  }

  /*
  It calls the districts-table service's addDistrict() function to add new districts.
  */
  public addDistrict(name: string) {
    var district = "{\"districtName\": \""+ name +"\" }";
    console.log(district);
    this.service.addDistrict(district);
  }

  /*
  It calls the districts-table service's deleteDistrict() function to delete district with given id.
  */
  public deleteDistrict(id: string){
    this.service.deleteDistrict(id);
  }

}
