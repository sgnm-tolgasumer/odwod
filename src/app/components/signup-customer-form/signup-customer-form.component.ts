import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, NgForm, Validators,FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http'



interface City {
  value: string;
  viewValue: string;
}

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
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm,name,mail,surname,telephone,password,date){

    var send1={"name": name,"surname":surname,"telephone":telephone,"password":password,"date":date}
    
    
    const url='http://localhost:8080/';
    this.http.post(url,send1)
    .subscribe(
      (result)=>{
        this.ngOnInit();
      }
    );
    console.log(send1);
  }

}
