import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkorderTransferService {
  private subject = new Subject<any>();

  sendClickEvent(){
    this.subject.next();
  }

  getEvent():Observable<any>{
    return this.subject.asObservable();
  }

}
