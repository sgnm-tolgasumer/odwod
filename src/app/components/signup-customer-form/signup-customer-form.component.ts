import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, NgForm, Validators} from '@angular/forms';
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

  selectedValue: string;
  cities: City[] = [
    {value: 'Ankara', viewValue: 'Ankara'},
  ];
  
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

    const url='http://localhost:8080/';
    this.http.post(url,f.value)
    .subscribe(
      (result)=>{
        this.ngOnInit();
      }
    );
    console.log(f.value);
  }

}
