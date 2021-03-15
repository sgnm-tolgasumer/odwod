import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, NgForm, Validators,FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from "../../shared/services/auth.service";
import {MatDialog} from '@angular/material/dialog';


interface City {
  value: string;
  viewValue: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
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
    {value: 'Ankara', viewValue: 'Ankara'},
  ];
  
  constructor(private http:HttpClient, public authService: AuthService,public dialog: MatDialog) {

   }
   openDialog() {
    const dialogRef = this.dialog.open(contentcustomer);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }

  onSubmit(f: NgForm,name,mail,surname,telephone,date, password){

    let uid = this.authService.SignUp(mail, password);
    uid.then( (value) => {
      var customerCreate={"userId": value, "name": name,"surname":surname,"telephone":telephone,"birthDate":date, "mail": mail};

      this.http.post("http://localhost:8080/customer",customerCreate,  httpOptions).subscribe(data =>
    {

    });

    });
  
    
  }

}
@Component({
  selector: 'contentcustomer',
  templateUrl: 'contentcustomer.html',
})
export class contentcustomer {}
