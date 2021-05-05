import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

//To send requests in JSON format.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobTypeTableService {

  constructor(private http:HttpClient) { }

  /*
  Sends http GET request to MySQL database server to get all job types.
  */ 
  public jobTypeList(){
    return this.http.get("http://34.107.3.185:8080/worktype");
  }

  /*
  Sends http POST request to MySQL database server to create new job type and add to MySQL database.
  */ 
  public addJobType(name: string){
    return this.http.post("http://34.107.3.185:8080/worktype", name, httpOptions).subscribe(data =>
    {

    });
  }

  /*
  Sends http DELETE request to MySQL database server to delete a job type with given id from MySQL database.
  */ 
  public deleteJobType(id: string){
    return this.http.delete("http://34.107.3.185:8080/worktype/" + id).subscribe(data => {
      console.log(data);
    });
}
}
