import { Component, OnInit } from '@angular/core';

// TODO 1: [ngClass]
// TODO 2: handle 'change' event

@Component({
  selector: 'nts-styled-text',
  templateUrl: './styled-text.component.html',
  styleUrls: ['./styled-text.component.css']
})
export class StyledTextComponent implements OnInit {

  exampleText = 'Lorem ipsum...';
  isBold = false;
  isUnderline = false;
  isItalic = false;

  ngOnInit() {
  }
}
