import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-initial-page-administrator',
  templateUrl: './initial-page-administrator.component.html',
  styleUrls: ['./initial-page-administrator.component.css']
})
export class InitialPageAdministratorComponent implements OnInit{

  workerCount: any;
  customerCount: any;
  activeCount: any;
  totalDoneWorkOrderCount: any;
  breakpoint: number;


  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1449) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1449) ? 1 : 2;
  }
  constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient) { }




  ngAfterViewInit(): void {
    this.getCountWorkers();
    this.getCountCustomers();
    this.getCountActiveWorkOrders();
    this.getCountDoneWorkOrders();
  }

  public getCountWorkers() {
    let countWorker = this.http.get("http://34.107.3.185:8080/worker/workerCount");
    countWorker.subscribe(response => this.workerCount = response);
  }

  public getCountCustomers() {
    let countCustomer = this.http.get("http://34.107.3.185:8080/customer/customerCount");
    countCustomer.subscribe(response => this.customerCount = response);
  }

  public getCountActiveWorkOrders() {
    let countActive = this.http.get("http://34.107.3.185:8080/workorder/activeCount");
    countActive.subscribe(response => this.activeCount = response);
  }

  public getCountDoneWorkOrders() {
    let countDone = this.http.get("http://34.107.3.185:8080/doneWorkOrder/doneCount");
    countDone.subscribe(response => this.totalDoneWorkOrderCount = response);
  }
}
