import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Examples";
  name  = "Baltazar";
  state = false;
  textColor = "black";
  customers = [
    { id: 1, first: "first",  last: "last" },
    { id: 2, first: "second", last: "last" },
    { id: 3, first: "third",  last: "last" },
    { id: 4, first: "fourth", last: "last" },
    { id: 5, first: "fifth",  last: "last" }
  ];

  onClickHandler(){
    console.log("onClickHandler");
    this.state = !this.state;
    //State is true
    if(this.state){
      this.textColor = "blue"
      this.state = true
    }
    //State is false
    else {
      this.textColor = "red";
      this.state = false
    }
  }
}
