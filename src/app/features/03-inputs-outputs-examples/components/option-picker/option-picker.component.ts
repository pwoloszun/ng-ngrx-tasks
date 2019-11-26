import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const defaultPrompt = 'Choose from:';

@Component({
  selector: 'nts-option-picker',
  templateUrl: './option-picker.component.html',
  styleUrls: ['./option-picker.component.css']
})
export class OptionPickerComponent implements OnInit {

  ngOnInit() {
  }
}
