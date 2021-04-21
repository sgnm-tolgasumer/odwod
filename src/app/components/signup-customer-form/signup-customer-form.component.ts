import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
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
  selector: 'app-signup-customer-form',
  templateUrl: './signup-customer-form.component.html',
  styleUrls: ['./signup-customer-form.component.css']
})
export class SignupCustomerFormComponent implements OnInit {

  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  selectedValue: string;
  cities: City[] = [
    { value: 'Ankara', viewValue: 'Ankara' },
  ];

  constructor(private http: HttpClient, public authService: AuthService,private _snackBar: MatSnackBar) {

  }



  ngOnInit(): void {
  }

  onSubmit(f: NgForm, name, mail, surname, telephone, date, password) {

    var signupcustomer=f.value;

    if(signupcustomer["name"] == null || signupcustomer["surname"]==null || signupcustomer["email"]==null || signupcustomer["password"]==null || signupcustomer["telephone"]==null || signupcustomer["date"]==null){
      this._snackBar.open('Fields cannot be empty', 'Close', {
        duration: 3000
      });
    }
    else{
      let uid = this.authService.SignUp(mail, password, name, surname);
      uid.then((value) => {
        var customerCreate = { "userId": value, "name": name, "surname": surname, "telephone": telephone, "birthDate": date, "mail": mail };
  
        this.http.post("http://localhost:8080/customer", customerCreate, httpOptions).subscribe(data => {
  
        });
  
      });
    }




  }

}

