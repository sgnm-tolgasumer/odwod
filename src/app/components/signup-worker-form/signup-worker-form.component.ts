import { Districts } from 'src/app/shared/services/districts';
import { JobTypes } from './../../shared/services/jobtypes';
import { DistrictsTableService } from './../../shared/services/districts-table.service';
import { JobTypeTableService } from './../../shared/services/job-type-table.service';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import { EmailValidator, FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from "../../shared/services/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';

interface City {
  value: string;
  viewValue: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-signup-worker-form',
  templateUrl: './signup-worker-form.component.html',
  styleUrls: ['./signup-worker-form.component.css']
})
export class SignupWorkerFormComponent implements OnInit, AfterViewInit {

  selectedValue: string;
  dataSourceTypes: JobTypes[];
  dataSourceDistricts: Districts[];
  cities: City[] = [
    { value: 'Ankara', viewValue: 'Ankara' },
  ];

  regions = new FormControl();
  regionsList: string[] = [];

  works = new FormControl();
  worksList: string[] = [];

  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private http: HttpClient, public authService: AuthService, private jobTypeService: JobTypeTableService, private districtNameService: DistrictsTableService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getRegionsList();
    this.getWorkList();
  }

  onSubmit(f: NgForm, name, surname, password, telephone, mail, date, addressCity, workableDistricts, jobTypes) {
    if(name=='' || surname=='' || password=='' || telephone=='' || mail=='' || date=='' || addressCity==null || workableDistricts ==null || jobTypes==null){
      this._snackBar.open('Fields cannot be empty', 'Close', {
        duration: 3000
      });
    }
    else {
      let uid = this.authService.SignUp(mail, password, name, surname);
      uid.then((value) => {
        console.log(value);
        var workerCreate = { "userId": value, "name": name, "surname": surname, "telephone": telephone, "birthDate": date, "mail": mail, "addressCity": addressCity, "workableDistricts": workableDistricts.join(), "jobTypes": jobTypes.join() };
        this.http.post("http://34.107.3.185:8080/worker", workerCreate, httpOptions).subscribe(data => {

        });
      });
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
