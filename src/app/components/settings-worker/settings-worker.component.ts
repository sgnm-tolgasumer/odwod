import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-settings-worker',
  templateUrl: './settings-worker.component.html',
  styleUrls: ['./settings-worker.component.css']
})
export class SettingsWorkerComponent implements OnInit{
  breakpoint: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
