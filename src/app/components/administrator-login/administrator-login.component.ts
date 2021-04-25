import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent implements OnInit {

  public isWorker = false;

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }


}
