import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = " thsi is just a practise"
  ninja = {
    name: " manuel ",
    age: 27
  };
   yell(e){
     alert("i am yelling")
   }
}
