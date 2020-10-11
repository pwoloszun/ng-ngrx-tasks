import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { timer, interval, Subscription, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SliceState, selectors, actions } from '../../store';

@Component({
  selector: 'nts-mail-context-menu',
  templateUrl: './mail-context-menu.component.html',
  styleUrls: ['./mail-context-menu.component.css']
})
export class MailContextMenuComponent implements OnInit, OnDestroy {

  // TODO
  hasAnySelectedMessagesInCurrentCategory$ = of(false);
  selectedMessagesInCurrentCategory$ = of([]);
  notCurrentCategories$ = of([]);

  private subscriptions: Subscription[] = [];

  moveToCategoryHandler(categoryId: number) {
    // TODO
  }

  constructor(private store: Store<SliceState>) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
