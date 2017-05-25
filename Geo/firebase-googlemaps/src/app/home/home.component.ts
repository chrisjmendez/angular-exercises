import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { FirebaseService } from "../shared/services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
   // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getAllLocations()
  }
  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    console.log("mapClicked:", $event.clientX, $event.movementY)
  }

  private onMouseClick($event: MouseEvent){
    console.log("onMouseClick:", $event)    
  }

  private onMouseEnter($event: MouseEvent){
    console.log("onMouseEnter:", $event)
  }

  private onMouseLeave($event: MouseEvent){
    console.log("onMouseLeave:", $event)
  }

  private onEvent($event: MouseEvent): void {
    console.log("onEvent", $event);
  }

  private onMouseMove($event: MouseEvent):void {
    //console.log("onMouseMove:", $event.clientX, $event.clientY);
  }
}