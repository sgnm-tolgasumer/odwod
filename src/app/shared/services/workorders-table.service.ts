import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class WorkordersTableService {

  constructor(private http:HttpClient) { }
  
  public workorderList(){
  
    return this.http.get("http://localhost:8080/workorder?topicId=pending");
  }

  public getTheJob(workOrder: any){
    
    this.http.post("http://localhost:8080/workorder", workOrder, httpOptions).subscribe(data =>
    {

    });
  }
}
