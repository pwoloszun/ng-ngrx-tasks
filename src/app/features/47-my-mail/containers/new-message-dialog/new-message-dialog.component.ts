import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

import { SliceState, selectors, actions } from '../../store';

@Component({
  selector: 'nts-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.css']
})
export class NewMessageDialogComponent implements OnInit {

  // TODO
  categories$ = of([]);
  selectedCategoryId$ = of(null);

  titleTmp = '';
  selectedCategoryId: number;

  get isFormValid() {
    return this.titleTmp.length > 0 && !!this.selectedCategoryId;
  }

  constructor(
    public dialogRef: MatDialogRef<NewMessageDialogComponent>,
    private store: Store<SliceState>
  ) { }

  createNewMessageHandler() {
    // TODO: create message
    // TODO: close modal dialog
  }

  changeCategoryHandler(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  cancelHandler() {
    this.closeDialog();
  }

  private closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
