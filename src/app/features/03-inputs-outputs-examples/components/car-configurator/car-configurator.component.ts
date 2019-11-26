import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-car-configurator',
  templateUrl: './car-configurator.component.html',
  styleUrls: ['./car-configurator.component.css']
})
export class CarConfiguratorComponent implements OnInit {

  selectedEngine: string = null;
  engines = ['Petrol', 'Diesel', 'Tesla'];
  selectedColor: string = null;
  colors = ['Black', 'White', 'Red', 'Yellow'];
  selectedDriveWheel: string = null;
  driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  ngOnInit() {
  }
}
