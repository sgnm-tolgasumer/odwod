import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-initial-page-administrator',
  templateUrl: './initial-page-administrator.component.html',
  styleUrls: ['./initial-page-administrator.component.css']
})
export class InitialPageAdministratorComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  workerCount: any;
  customerCount: any;

  constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.getCountWorkers();
    this.getCountCustomers();
  }

  public getCountWorkers() {
    let countWorker = this.http.get("http://localhost:8080/worker/workerCount");
    countWorker.subscribe(response => this.workerCount = response);
  }

  public getCountCustomers() {
    let countCustomer = this.http.get("http://localhost:8080/customer/customerCount");
    countCustomer.subscribe(response => this.customerCount = response);
  }
}
