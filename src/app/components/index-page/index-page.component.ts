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
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff0000,
      backgroundColor: 0x310000,
      points: 20.00,
      maxDistance: 23.00,
      spacing: 17.00,
      showDots: false
    });
  }

}
