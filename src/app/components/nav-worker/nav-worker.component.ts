import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-nav-worker',
  templateUrl: './nav-worker.component.html',
  styleUrls: ['./nav-worker.component.css']
})
export class NavWorkerComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {}

  ngOnInit(): void {
  }
}
