import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "welcome to the home page";
  myString = "i love chicken";

  @Input() ninja;

  @Output () onYell = new EventEmitter();
  fireYellEvent(e){
    this.onYell.emit(e);
  }

alertMe (val){
  alert(val)
};
  constructor() { }

  ngOnInit() {
  }

}
