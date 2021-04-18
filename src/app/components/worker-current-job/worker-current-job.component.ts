import { Component, OnInit } from '@angular/core';
import { WorkorderTransferService } from './../../shared/services/workorder-transfer.service';
import { AuthService } from "../../shared/services/auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-worker-current-job',
  templateUrl: './worker-current-job.component.html',
  styleUrls: ['./worker-current-job.component.css']
})
export class WorkerCurrentJobComponent implements OnInit {
  workOrder: any;
  constructor(private transfered: WorkorderTransferService, public authService: AuthService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.workOrder = this.transfered.workOrderToTransfer.subscribe(message => this.workOrder = message);

  }
  /**
   * It will transfer the workorder from Kafka's in_progress topic to done topic via REST API.
   */
  public closeJobButtonClick(workOrder: any){
    this.http.post("http://localhost:8080/workorder/transfer/" + workOrder["workOrderId"] + "/" + "in_progress"+"/done/" + workOrder["workerId"], httpOptions).subscribe(data =>
    {

    });
  }
}
