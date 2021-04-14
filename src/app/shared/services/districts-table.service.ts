import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

//To send requests in JSON format.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DistrictsTableService {

  constructor(private http:HttpClient) { }

  /*
  Sends http GET request to MySQL database server to get all districts.
  */ 
  public districtsList(){
    return this.http.get("http://localhost:8080/district");
  }

  /*
  Sends http POST request to MySQL database server to create new district and add to MySQL database.
  */ 
  public addDistrict(name: string){
    return this.http.post("http://localhost:8080/district", name, httpOptions).subscribe(data =>
    {

    });
  }

  /*
  Sends http DELETE request to MySQL database server to delete a district with given id from MySQL database.
  */ 
  public deleteDistrict(id: string){
    return this.http.delete("http://localhost:8080/district/" + id).subscribe(data => {
      console.log(data);
    });
}
}
