import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, NgForm, Validators,FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http'

interface City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-signup-worker-form',
  templateUrl: './signup-worker-form.component.html',
  styleUrls: ['./signup-worker-form.component.css']
})
export class SignupWorkerFormComponent implements OnInit {

  selectedValue: string;

  cities: City[] = [
    {value: 'Ankara', viewValue: 'Ankara'},
  ];

  regions = new FormControl();
  regionsList: string[] = ['Yenimahalle', 'Kazan', 'Çayyolu', 'Dikmen'];

  works = new FormControl();
  worksList: string[] = ['Güvenlik', 'Temizlik', 'Sağlık', 'Boyama'];

  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm,name,surname,password,telephone,mail,date,city,region,work){

    var jsonobject={"name": name,"surname":surname,"password":password,"telephone":telephone,"mail":mail,"date":date,"city":city,"region":region,"work":work}
    
    
    const url='http://localhost:8080/';
    this.http.post(url,jsonobject)
    .subscribe(
      (result)=>{
        this.ngOnInit();
      }
    );
    console.log(jsonobject);
  }

}
