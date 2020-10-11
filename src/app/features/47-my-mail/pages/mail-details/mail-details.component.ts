import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AppState, actions, selectors } from '../../store';

@Component({
  selector: 'nts-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.css']
})
export class MailDetailsComponent implements OnInit, OnDestroy {

  nextMessageId$ = of(123);
  isNextDisabled$ = of(true);

  prevMessageId$ = of(997);
  isPrevDisabled$ = of(false);

  message$ = of(null);

  private subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const sub = this.activatedRoute.params.subscribe((params) => {
      // TODO
      console.log('mail details', params);
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
