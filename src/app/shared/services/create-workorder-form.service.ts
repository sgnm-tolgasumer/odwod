import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CreateWorkorderFormService {

  constructor(private http:HttpClient) { }

  /* This function will send a POST request to Kafka Server to create work order in 
    PENDING topic. 
  */ 
  public createWorkOrder(workOrder: any){
    
    return this.http.post("http://34.107.3.185:8080/workorder", workOrder, httpOptions).subscribe(data =>
      {

      });
  }
}
