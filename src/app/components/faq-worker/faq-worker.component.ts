import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-faq-worker',
  templateUrl: './faq-worker.component.html',
  styleUrls: ['./faq-worker.component.css']
})
export class FaqWorkerComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
  }

}
