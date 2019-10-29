import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { timer, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'nts-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  errorMessage$: Observable<string>;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit() {
    const { message, duration } = this.data;
    // TODO
    this.errorMessage$ = of(message);
  }

}
