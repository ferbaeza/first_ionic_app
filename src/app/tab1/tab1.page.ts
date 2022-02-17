import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  resta:any=[];

  constructor(
    private http: HttpClient,

  ) {}
  ngOnInit() {
    console.log("hello");
    this.getRestaurants().subscribe(res=>{
      console.log("Response", res)
      this.resta=res;
    })
  }

  getRestaurants(){
    return this.http
    .get('http://appmurcia_codeigniter.test/rest/restaurants')
    .pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

}
