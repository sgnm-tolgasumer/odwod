import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-settings-customer',
  templateUrl: './settings-customer.component.html',
  styleUrls: ['./settings-customer.component.css']
})
export class SettingsCustomerComponent implements OnInit{

  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
