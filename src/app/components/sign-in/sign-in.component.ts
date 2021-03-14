import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public isWorker = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  showCustomerForm(){
    if (this.isWorker == true)
      this.isWorker = false;
    else
      this.isWorker = true;
  }

}
