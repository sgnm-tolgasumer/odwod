import { Customers } from './../../shared/services/customers';
import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileEditService } from 'src/app/shared/services/profile-edit.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings-customer',
  templateUrl: './settings-customer.component.html',
  styleUrls: ['./settings-customer.component.css']
})
export class SettingsCustomerComponent implements OnInit{
  changePicture: boolean;
  customerProfile: Customers;
  breakpoint: number;

  profilePictures: string[] = ["assets/painter.svg", "assets/plumber.svg", "assets/maid.svg", "assets/cleaning-staff.svg"];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

  ngAfterViewInit() {
    this.getCustomerProfileInfo();
  }

  onSubmit(f: NgForm) {
    var customer = f.value;

    if (customer["name"] == '' || customer["surname"] == '' || customer["telephone"] == '') {
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
            displayName: customer["name"] + " " + customer["surname"]
          }).then(function () {

          }).catch(function (error) {
            console.log(error);
          });
        } else {
          // No user is signed in.
        }
      }).then((value) => {
        setTimeout(() => {
          var customerUpdate = { "name": customer["name"], "surname": customer["surname"], "telephone": customer["telephone"]};
          this.service.updateCustomerProfile(uid, customerUpdate);
          this._snackBar.open('Profile Updated Successfully', 'Close', {
            duration: 3000
          });
          }, 1300);
      });
    }
  }

  getCustomerProfileInfo() {
    var uid;
    this.authService.afAuth.onAuthStateChanged(function (user) {
      if (user) {
        uid = user.uid;
      } else {
        // No user is signed in.
      }
    }).then((value) => {
      setTimeout(() => {
        let resp = this.service.getCustomerByUid(uid);
        resp.subscribe((report) => {
          this.customerProfile = report as Customers;
        });
      }, 1300);
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

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService, private service: ProfileEditService, private _snackBar: MatSnackBar) {}
}
