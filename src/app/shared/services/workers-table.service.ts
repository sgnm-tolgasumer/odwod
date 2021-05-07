import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersTableService {

  constructor(private http:HttpClient) { }

  /*
  Sends http GET request to MySQL database server to get all workers.
  */ 
  public workersList(){
    return this.http.get("http://34.107.3.185:8080/worker");
  }

  /*
  Sends http DELETE request to MySQL database server to delete a worker with given id.
  */ 
  public deleteWorker(id: string){
    return this.http.delete("http://34.107.3.185:8080/worker/" + id).subscribe(data => {
      console.log(data);
    });
}

}
