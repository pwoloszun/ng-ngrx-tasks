import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { countries, getInterestsByType$, interestTypes } from './dictionaries';

@Component({
  selector: 'nts-my-form-validation-task',
  templateUrl: './my-form-validation-task.component.html',
  styleUrls: ['./my-form-validation-task.component.css']
})
export class MyFormValidationTaskComponent implements OnInit {

  allCountries = countries;
  allInterestTypes = interestTypes;

  selectedInterestsMap = {};

  availableInterestLabels = [];

  myForm = null; // TODO

  submitHandler(event) {
    event.preventDefault();
    const formValue = {}; // TODO
    console.log('form task value', formValue);
  }

  ngOnInit(): void {
    // TODO: handle areDetailsEnabled change

    // TODO: handle selectedInterestType change

    // TODO: handle formValue.availableInterests change
  }

  buildAvailableInterests(interests: string[]) {
    // TODO
  }
}
