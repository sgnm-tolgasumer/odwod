import { CreateWorkorderFormService } from './../../shared/services/create-workorder-form.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../shared/services/auth.service";
import {MatDialog} from '@angular/material/dialog';

interface City {
  value: string;
  viewValue: string;
}

interface Region {
  valueregion: string;
  viewValueregion: string;
}

interface Type {
  valuetype: string;
  viewValuetype: string;
}

@Component({
  selector: 'app-create-workorder-form',
  templateUrl: './create-workorder-form.component.html',
  styleUrls: ['./create-workorder-form.component.css']
})
export class CreateWorkorderFormComponent implements OnInit {

  selectedValue: string;
  selectedValueregion: string;
  selectedValuetype: string;

  cities: City[] = [
    { value: 'Ankara', viewValue: 'Ankara' },
  ];

  regions: Region[] = [
    { valueregion: 'Cankaya', viewValueregion: 'Cankaya' },
    { valueregion: 'Yenimahalle', viewValueregion: 'Yenimahalle' },
    { valueregion: 'Kazan', viewValueregion: 'Kazan' },
    { valueregion: 'Bilkent', viewValueregion: 'Bilkent' },
    { valueregion: 'Mamak', viewValueregion: 'Mamak' }
  ];

  types: Type[] = [
    { valuetype: 'Fix Jobs', viewValuetype: 'Fix Jobs' },
    { valuetype: 'Security', viewValuetype: 'Security' },
    { valuetype: 'Home Jobs', viewValuetype: 'Home Jobs' },
    { valuetype: 'Cleaning', viewValuetype: 'Cleaning' },
    { valuetype: 'Recondition', viewValuetype: 'Recondition' }
  ];


  constructor(private service: CreateWorkorderFormService, public authService: AuthService,public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(createworkordercontent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    var workOrder = f.value;
    workOrder["status"] = 0;
    var user = this.authService.getCurrentUser();
    workOrder["userId"] = user.uid;
    console.log(workOrder);
    this.service.createWorkOrder(workOrder);
    f.resetForm();
  }

}
@Component({
  selector: 'createworkordercontent',
  templateUrl: 'createworkordercontent.html',
})
export class createworkordercontent {}
