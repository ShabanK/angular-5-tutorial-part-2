import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  toggle:boolean=false;
  items=[
    {title:"Why is the sky blue?",content:"Ultraviolet rays to be vibin doe"},
    {title:"Why is the sky red?",content:"Ultraviolet rays to be vibin doe"},
    {title:"Why is the sky pink?",content:"Ultraviolet rays to be vibin doe"},
  ]
  constructor() { }

  ngOnInit() {
  }

  toggleModal(){
    this.toggle=!this.toggle;
  }
}
