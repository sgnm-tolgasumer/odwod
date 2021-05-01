import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  panelOpenState = false;
  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1420) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1420) ? 1 : 2;
  }
  constructor(private breakpointObserver: BreakpointObserver) {}
}
