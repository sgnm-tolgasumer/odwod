import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WorkorderTransferService } from './../../shared/services/workorder-transfer.service';
import { Subscription } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-worker-current-job',
  templateUrl: './worker-current-job.component.html',
  styleUrls: ['./worker-current-job.component.css']
})
export class WorkerCurrentJobComponent implements OnInit {
  currentWorkOrder: any;
  clickEventSubscription:Subscription;
  
  constructor(public authService: AuthService, private http: HttpClient, private _snackBar: MatSnackBar, private workorderTransfer:WorkorderTransferService) {
    this.clickEventSubscription = this.workorderTransfer.getEvent().subscribe(() =>{
      this.getCurrentJobByWorkerId();
    })
   }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.getCurrentJobByWorkerId();
  }
  /**
   * It will transfer the workorder from Kafka's in_progress topic to done topic via REST API.
   */
  public closeJobButtonClick(workOrder: any) {
    this.http.post("http://34.107.3.185:8080/workorder/transfer/" + workOrder["workOrderId"] + "/" + "in_progress" + "/done/" + workOrder["workerId"], httpOptions).subscribe(data => {
      this._snackBar.open('You Completed The Job Successfully !!!!', 'Close', {
        duration: 3000
      });
      this.getCurrentJobByWorkerId();
    });
  }

  public getCurrentJobByWorkerId() {
    var uid;
    this.authService.afAuth.onAuthStateChanged(function (user) {
      if (user) {
        uid = user.uid;
      } else {

        // No user is signed in.
      }
    }).then((value) => {
      setTimeout(() => {
        let resp = this.http.get("http://34.107.3.185:8080/workorder/worker/" + uid, { responseType: 'json' });
        resp.subscribe(report => this.currentWorkOrder = report[0]);
      }, 1000);
    });
  }


}
