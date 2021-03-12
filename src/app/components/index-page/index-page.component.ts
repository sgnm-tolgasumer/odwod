import { Component, OnInit } from '@angular/core';


declare var VANTA: any;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    VANTA.NET({
      el: "#vanta",
      color: 0xff3f81,
      backgroundColor: 0x23153c,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  }

}
