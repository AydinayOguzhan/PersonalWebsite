import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navButtons:any=[{id:1, name:"Home", link:"home"},{id:2, name:"About Me",link:"aboutme"}]
  currentButton:any
  defaultButton=[{id:1, name:"Home", link:"home"}]

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentButton = this.defaultButton
  }

  setCurrentButton(button:any){
    this.currentButton = button
  }

  setCurrentButtonClass(navButton:any){
    if (navButton.id == this.currentButton.id) {
      return "nav-link active"
    }else if(this.currentButton == this.defaultButton){
      return "nav-link active"
    }else{
      return "nav-link"
    }
  }
}
