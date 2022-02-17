import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  review:any=[];

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {
    console.log("hello");
    this.getRestaurants().subscribe(res=>{
      console.log("Response", res)
      this.review=res;
    })
  }

  getRestaurants(){
    return this.http
    .get('http://appmurcia_codeigniter.test/rest/allreviews')
    .pipe(
      map((res:any)=>{
        return res;
      })
    )
  }

}