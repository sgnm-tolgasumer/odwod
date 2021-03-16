import { Component, OnInit } from '@angular/core';
import { WorkorderTransferService } from './../../shared/services/workorder-transfer.service';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-worker-current-job',
  templateUrl: './worker-current-job.component.html',
  styleUrls: ['./worker-current-job.component.css']
})
export class WorkerCurrentJobComponent implements OnInit {
  workOrder: any;
  constructor(private transfered: WorkorderTransferService, public authService: AuthService) { }

  ngOnInit(): void {
    this.workOrder = this.transfered.workOrderToTransfer.subscribe(message => this.workOrder = message);

  }
}
