import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data=[
    {name:"John", age: 14, job:"Blogger"},
    {name:"Elyse", age: 140, job:"Youtuber"},
    {name:"Elise", age: 34, job:"Comedian"},
  ]
  headers=[
    {key: "name", label:"Name"},
    {key: "age", label: "Age"},
    {key: "job", label: "Job"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
