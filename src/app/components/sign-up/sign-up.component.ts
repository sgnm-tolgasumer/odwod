import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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
