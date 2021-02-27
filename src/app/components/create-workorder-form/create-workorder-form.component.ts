import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NgForm } from '@angular/forms';

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
    {value: 'Ankara', viewValue: 'Ankara'},
  ];

  regions: Region[] = [
    {valueregion: 'Cankaya', viewValueregion: 'Cankaya'},
    {valueregion: 'Yenimahalle', viewValueregion: 'Yenimahalle'},
    {valueregion: 'Kazan', viewValueregion: 'Kazan'}
  ];

  types: Type[] = [
    {valuetype: 'Temizlik', viewValuetype: 'Temizlik'},
    {valuetype: 'Güvenlik', viewValuetype: 'Güvenlik'}
  ];


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

    const url='http://localhost:8080/';
    this.http.post(url,f.value)
    .subscribe(
      (result)=>{
        this.ngOnInit();
      }
    );
    console.log(f.value);
  }

}
