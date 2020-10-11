import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { shuffle } from 'lodash';
import * as faker from 'faker';

import {
  actions,
  selectors,
  models,
  AppState,
} from '../store';

const delayInSec = {
  create: 5,
  update: 4,
  delete: 14
};

@Injectable({
  providedIn: 'root'
})
export class ExternalMessagesWebsocketService {
  private intervalId;

  private allCategories$ = this.store.pipe(
    select(selectors.selectCategories)
  );
  private categories: models.CategoryEntity[];
  private subscriptions: Subscription[] = [];


  constructor(private store: Store<AppState>) {
    const sub = this.allCategories$.subscribe((categories) => {
      this.categories = categories;
    });
    this.subscriptions.push(sub);
  }

  destroy() {
    this.close();
  }

  open() {
    let i = 0;
    this.intervalId = setInterval(() => {
      i++;
      if (i % delayInSec.create === 0) {
        this.createFakeMessage();
      }
    }, 1000);
  }

  close() {
    clearInterval(this.intervalId);
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private createFakeMessage() {
    const messageParams = this.generateMessageData();
    console.log('createFakeMessage', messageParams);

    // TODO: create message
  }

  private generateMessageData(): models.MessageParams {
    const categoryId = shuffle(this.categories)[0].id;
    return {
      title: faker.lorem.word(),
      content: faker.lorem.words(),
      createdAt: faker.date.past().toJSON(),
      categoryId,
    };
  }

}
