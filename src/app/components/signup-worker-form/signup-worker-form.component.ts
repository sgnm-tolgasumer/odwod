import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from "../../shared/services/auth.service";

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
export class SignupWorkerFormComponent implements OnInit {

  selectedValue: string;

  cities: City[] = [
    { value: 'Ankara', viewValue: 'Ankara' },
  ];

  regions = new FormControl();
  regionsList: string[] = ['Yenimahalle', 'Kazan', 'Mamak', 'Cankaya', 'Bilkent'];

  works = new FormControl();
  worksList: string[] = ['Cleaning', 'Security', 'Health', 'Paint', 'Renovation', 'Transportation', 'Maintenance'];

  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private http: HttpClient, public authService: AuthService) { }
 

  ngOnInit(): void {
  }

  onSubmit(f: NgForm, name, surname, password, telephone, mail, date, addressCity, workableDistricts, jobTypes) {

    let uid = this.authService.SignUp(mail, password);
    uid.then((value) => {
      console.log(value);
      var workerCreate = { "userId": value, "name": name, "surname": surname, "telephone": telephone, "birthDate": date, "mail": mail, "addressCity": addressCity, "workableDistricts": workableDistricts.join(), "jobTypes": jobTypes.join() };
      console.log(workerCreate);
      this.http.post("http://localhost:8080/worker", workerCreate, httpOptions).subscribe(data => {

      });

    });
  }

}
