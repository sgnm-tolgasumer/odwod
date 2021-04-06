import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-customer',
  templateUrl: './faq-customer.component.html',
  styleUrls: ['./faq-customer.component.css']
})
export class FaqCustomerComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  ngOnInit(): void {
  }

}

