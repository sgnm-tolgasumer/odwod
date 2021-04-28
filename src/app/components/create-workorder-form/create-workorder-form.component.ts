import { CreateWorkorderFormService } from './../../shared/services/create-workorder-form.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { DistrictsTableService } from './../../shared/services/districts-table.service';
import { JobTypeTableService } from './../../shared/services/job-type-table.service';
import { JobTypes } from 'src/app/shared/services/jobtypes';
import { Districts } from 'src/app/shared/services/districts';

interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-workorder-form',
  templateUrl: './create-workorder-form.component.html',
  styleUrls: ['./create-workorder-form.component.css']
})
export class CreateWorkorderFormComponent implements OnInit {

  dataSourceTypes: JobTypes[];
  dataSourceDistricts: Districts[];

  selectedValue: string;
  selectedValueregion: string;
  selectedValuetype: string;

  cities: City[] = [
    { value: 'Ankara', viewValue: 'Ankara' },
  ];

  regionsList: string[] = [];
  worksList: string[] = [];

  constructor(private service: CreateWorkorderFormService, public authService: AuthService, private _snackBar: MatSnackBar, private jobTypeService: JobTypeTableService, private districtNameService: DistrictsTableService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getRegionsList();
    this.getWorkList();
  }

  onSubmit(f: NgForm) {

    var workOrder = f.value;
    if (workOrder["title"] == null || workOrder["type"] == null || workOrder["telephone"] == null || workOrder["description"] == '' || workOrder["addressCity"] == null || workOrder["addressDistrict"] == null || workOrder["openAddress"] == '') {
      this._snackBar.open('Fields cannot be empty', 'Close', {
        duration: 3000
      });
    }
    else {
      workOrder["status"] = 0;
      var user = this.authService.getCurrentUser();
      workOrder["userId"] = user.uid;
      console.log(workOrder);
      this.service.createWorkOrder(workOrder);
      this._snackBar.open('Your Work Order Created Successfully', 'Close', {
        duration: 3000
      });
      f.resetForm();
    }

  }

  /**
   * It fills the regionslist from MySQL database over REST API.
   */
  public getRegionsList() {
    this.districtNameService.districtsList().subscribe(data => {
      this.dataSourceDistricts = data as Districts[];
      this.dataSourceDistricts.forEach(element => {

        this.regionsList.push(element.districtName);

      });
    });
  }

  /**
   * It fills the work types list from MySQL database over REST API.
   */
  public getWorkList() {
    this.jobTypeService.jobTypeList().subscribe(data => {
      this.dataSourceTypes = data as JobTypes[];
      this.dataSourceTypes.forEach(element => {

        this.worksList.push(element.workType);
      });
    });
  }

}
@Component({
  selector: 'createworkordercontent',
  templateUrl: 'createworkordercontent.html',
})
export class createworkordercontent { }
