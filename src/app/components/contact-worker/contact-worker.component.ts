import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-worker',
  templateUrl: './contact-worker.component.html',
  styleUrls: ['./contact-worker.component.css']
})
export class ContactWorkerComponent implements OnInit{
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable();
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true;
      this.submitted = false;
      this.http.post("https://script.google.com/macros/s/AKfycby5CNKOA-oFSF9V9JwsWKoRYKYffZ-79DjHyU94OcK4_aB205a3Gm-DypAoT7r2vT7Q/exec", formData).subscribe(
        (response) => {
          if (response["result"] == "success") {
            this.responseMessage = "We got your email. We will reach you about this issue as soon as possible.";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }
}
