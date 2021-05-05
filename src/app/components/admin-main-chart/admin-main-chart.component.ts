import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-admin-main-chart',
  templateUrl: './admin-main-chart.component.html',
  styleUrls: ['./admin-main-chart.component.css']
})
export class AdminMainChartComponent implements OnInit {

  activeCount: any;
  totalDoneWorkOrderCount: any;
  chart: any;

  workerCount: any;
  customerCount: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCountActiveWorkOrders();
    this.getCountDoneWorkOrders();
    this.getCountCustomers();
    this.getCountWorkers();

  }
  ngAfterViewInit(){
    setTimeout(()=>
    this.chart = new Chart("lineChart", {
      type: 'pie',
      data: {
        labels: ['Customer Number', 'Worker Number'],
        datasets: [
          {
            data: [parseInt(this.customerCount["count"]), parseInt(this.workerCount["count"])],
            backgroundColor: [
              'rgb(38,38,76)',
              'rgb(255,124,0)'
            ],
            hoverOffset: 4
          }]
      }
    })
    ,3000)
  }

  public getCountActiveWorkOrders() {
    let countActive = this.http.get("http://34.107.3.185:8080/workorder/activeCount");
    countActive.subscribe(response => this.activeCount = response);
  }

  public getCountDoneWorkOrders() {
    let countDone = this.http.get("http://34.107.3.185:8080/doneWorkOrder/doneCount");
    countDone.subscribe(response => this.totalDoneWorkOrderCount = response);
  }

  public getCountWorkers() {
    let countWorker = this.http.get("http://34.107.3.185:8080/worker/workerCount");
    countWorker.subscribe(response => this.workerCount = response);
  }

  public getCountCustomers() {
    let countCustomer = this.http.get("http://34.107.3.185:8080/customer/customerCount");
    countCustomer.subscribe(response => this.customerCount = response);
  }

}
