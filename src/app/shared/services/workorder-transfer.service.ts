import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class WorkorderTransferService {
  private messageSource = new BehaviorSubject<any>("You have no job currently :(");
  workOrderToTransfer = this.messageSource.asObservable();

  constructor() { }
  setWorkOrder(workOrder: any){
    this.messageSource.next(workOrder);
  }

}
