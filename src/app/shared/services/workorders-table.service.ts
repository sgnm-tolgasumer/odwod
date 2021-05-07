import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class WorkordersTableService {

  constructor(private http: HttpClient, public authService: AuthService) { }

  /**
   * It will get all workorders by worker's job preferences and selected workable districts.
   */
  public workorderList(uid: string) {
    //console.log(uid);
    //var user = this.authService.getCurrentUser();
    return this.http.get("http://34.107.3.185:8080/workorder/" + uid);
  }

  /**
   * It will transfer the workorder into in_progress topic from pending topic. 
   */
  public getTheJob(workOrder: any) {

    this.http.post("http://34.107.3.185:8080/workorder/transfer/" + workOrder["workOrderId"] + "/" + "pending" + "/in_progress/" + workOrder["workerId"], httpOptions).subscribe(data => {

    });
  }

  /**
   * It gets the all workorders which are created by specific customer via REST API with customers uid.
   */
  public workorderListCustomer(uid: string) {
    //console.log(uid);
    //var user = this.authService.getCurrentUser();
    return this.http.get("http://34.107.3.185:8080/workorder/customer/" + uid);
  }

  /**
    * It gets the single workorder's status with its unique workOrderId.
    */
  public workorderStatus(workOrderId: string) {
    return this.http.get("http://34.107.3.185:8080/workorder/status/" + workOrderId, { responseType: 'text' });
  }

  /**
   * It will get all the work orders from the Kafka's in_progress topic (for admin page). 
   * @returns JSON Array.
   */
  public getAllActiveWorkOrders() {
    return this.http.get("http://34.107.3.185:8080/workorder?topicId=in_progress");
  }

  /**
   * It will get all the completed work orders from MySQL database via REST API (for admin page).
   * @returns JSON Array.
   */
  public getAllDoneWorkOrders() {
    return this.http.get("http://34.107.3.185:8080/doneWorkOrder");
  }

  /**
   * It will get all the completed work orders by customer's uid from MySQL database via REST API (for customer job history page).
   * @returns JSON Array.
   */
  public getAllDoneCustomerWorkOrders(customerUid: string) {
    return this.http.get("http://34.107.3.185:8080/doneWorkOrder/byCustomer/" + customerUid);
  }

  /**
   * It will get all the completed work orders by worker's uid from MySQL database via REST API (for worker job history page).
   * @returns JSON Array.
   */
   public getAllDoneWorkerWorkOrders(workerUid: string) {
    return this.http.get("http://34.107.3.185:8080/doneWorkOrder/byWorker/" + workerUid);
  }
}
