import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WorkordersTableService {

  constructor(private http:HttpClient) { }
  
  public workorderList(){
  
    return this.http.get("http://localhost:8080/workorder");
  }
}
