import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


//To send requests in JSON format.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileEditService {

  constructor(private http: HttpClient) { }

  /*
  Sends http GET request to MySQL database server to get worker's profile.
  */
  public getWorkerByUid(uid: string) {
    return this.http.get("http://localhost:8080/worker/" + uid);
  }

  /*
  Sends http GET request to MySQL database server to get customer's profile.
  */
  public getCustomerByUid(uid: string) {
    return this.http.get("http://localhost:8080/customer/" + uid);
  }

  /**
   * It sends a http PUT request to MySQL database to update worker's profile.
   * 
   * @param uid of customer as string.
   * @param workerUpdate a valid JSON to put request to change customer's profile.
   * @returns response of request.
   */
  public updateCustomerProfile(uid: string, customerUpdate: any) {
    return this.http.put("http://localhost:8080/customer/" + uid, customerUpdate, httpOptions).subscribe(data => {
    });
  }

  /**
   * It sends a http PUT request to MySQL database to update worker's profile.
   * 
   * @param uid of worker as string.
   * @param workerUpdate a valid JSON to put request to change worker's profile.
   * @returns response of request.
   */
  public updateWorkerProfile(uid: string, workerUpdate: any) {
    return this.http.put("http://localhost:8080/worker/" + uid, workerUpdate, httpOptions).subscribe(data => {
    });
  }
}
