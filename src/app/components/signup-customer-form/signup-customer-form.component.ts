import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

}
