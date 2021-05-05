import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersTableService {

  constructor(private http:HttpClient) { }

   /*
  Sends http GET request to MySQL database server to get all customers.
  */ 
  public customersList(){
    return this.http.get("http://34.107.3.185:8080/customer");
  }

  /*
  Sends http DELETE request to MySQL database server to delete a customer with given id.
  */ 
  public deleteCustomer(id: string){
    return this.http.delete("http://34.107.3.185:8080/customer/" + id).subscribe(data => {
      console.log(data);
    });
}
}
