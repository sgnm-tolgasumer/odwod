import { JobTypeTableComponent } from './../job-type-table/job-type-table.component';
import { JobTypes } from './../../shared/services/jobtypes';
import { JobTypeTableService } from './../../shared/services/job-type-table.service';
import { ProfileEditService } from './../../shared/services/profile-edit.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../../shared/services/auth.service';
import { Workers } from 'src/app/shared/services/workers';
import { FormControl, NgForm } from '@angular/forms';
import { DistrictsTableService } from 'src/app/shared/services/districts-table.service';
import { Districts } from 'src/app/shared/services/districts';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings-worker',
  templateUrl: './settings-worker.component.html',
  styleUrls: ['./settings-worker.component.css']
})
export class SettingsWorkerComponent implements OnInit {
  changePicture: boolean;
  breakpoint: number;
  workerProfile: Workers;

  regions = new FormControl();
  districtDataSource: Districts[];
  districtList: string[] = [];
  selectedDistricts: string[] = [];

  types = new FormControl();
  jobTypeDataSource: JobTypes[];
  jobTypeList: string[] = [];
  selectedJobTypes: string[] = [];

  profilePictures: string[] = ["assets/painter.svg", "assets/plumber.svg", "assets/maid.svg", "assets/cleaning-staff.svg"];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
    this.getRegionsList();
    this.getJobTypesList();
  }
  ngAfterViewInit() {
    this.getWorkerProfileInfo();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

  onSubmit(f: NgForm) {
    var worker = f.value;

    if (worker["name"] == '' || worker["surname"] == '' || worker["telephone"] == '' || worker["type"] == null || worker["district"] == null) {
      this._snackBar.open('Fields cannot be empty', 'Close', {
        duration: 3000
      });
    }
    else {
      var uid;
      this.authService.afAuth.onAuthStateChanged(function (user) {
        if (user) {
          uid = user.uid;

          user.updateProfile({
            displayName: worker["name"] + " " + worker["surname"]
          }).then(function () {

          }).catch(function (error) {
            console.log(error);
          });
        } else {
          // No user is signed in.
        }
      }).then((value) => {
        setTimeout(() => {
          var workerUpdate = { "name": worker["name"], "surname": worker["surname"], "telephone": worker["telephone"], "workableDistricts": worker["district"].join(), "jobTypes": worker["type"].join() };
          this.service.updateWorkerProfile(uid, workerUpdate);
          this._snackBar.open('Profile Updated Successfully', 'Close', {
            duration: 3000
          });
          }, 1300);
      });

    }
  }

  getWorkerProfileInfo() {
    var uid;
    this.authService.afAuth.onAuthStateChanged(function (user) {
      if (user) {
        uid = user.uid;
      } else {

        // No user is signed in.
      }
    }).then((value) => {
      setTimeout(() => {
        let resp = this.service.getWorkerByUid(uid);
        resp.subscribe((report) => {
          this.workerProfile = report as Workers
          this.selectedJobTypes = this.workerProfile.jobTypes.split(",");
          this.selectedDistricts = this.workerProfile.workableDistricts.split(",");
        });
      }, 1300);
    });
  }

  /**
  * It fills the regionslist from MySQL database over REST API.
  */
  public getRegionsList() {
    this.districtsService.districtsList().subscribe(data => {
      this.districtDataSource = data as Districts[];
      this.districtDataSource.forEach(element => {
        this.districtList.push(element.districtName);
      });
    });
  }

  /**
 * It fills the job types list from MySQL database via REST API.
 */
  public getJobTypesList() {
    this.jobTypesService.jobTypeList().subscribe(data => {
      this.jobTypeDataSource = data as JobTypes[];
      this.jobTypeDataSource.forEach(element => {
        this.jobTypeList.push(element.workType);
      });
    });
  }

  changeProfilePic(picNum: any) {
    if (this.changePicture == true && picNum != undefined) {
      var user = this.authService.getCurrentUser();

      user.updateProfile({
        photoURL: this.profilePictures[picNum]
      }).then(function () {

      }).catch(function (error) {
        console.log(error);
      });

      this.changePicture = false;
      this._snackBar.open('Your Profile Picture Successfully Updated', 'Close', {
        duration: 3000
      });
    }
    else if (this.changePicture == true && picNum == undefined) {
      this.changePicture = false;
    }
    else {
      this.changePicture = true;
    }
  }

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService, private service: ProfileEditService, private districtsService: DistrictsTableService, private jobTypesService: JobTypeTableService, private _snackBar: MatSnackBar) { }
}
