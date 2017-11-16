import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "welcome to the home page";
  myString = "i love chicken";
  myBoolean = true;

alertMe (val){
  alert(val)
}
  constructor() { }

  ngOnInit() {
  }

}
