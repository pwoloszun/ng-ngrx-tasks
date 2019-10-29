import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  isVisible = false;
  labelText: string;

  constructor() {
  }

  ngOnInit() {
  }

  handleToggleText() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.labelText = 'Hide';
    } else {
      this.labelText = 'Show';
    }
  }

}
