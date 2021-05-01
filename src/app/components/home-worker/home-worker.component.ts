import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-worker',
  templateUrl: './home-worker.component.html',
  styleUrls: ['./home-worker.component.css']
})
export class HomeWorkerComponent {
  breakpoint: number;
  panelOpenState = false;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1179) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1179) ? 1 : 2;
  }
  constructor(private breakpointObserver: BreakpointObserver) {}
}
