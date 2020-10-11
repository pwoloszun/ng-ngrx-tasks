import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, delay, filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as faker from 'faker';

import { models, SliceState, selectors, actions } from '../../store';

@Component({
  selector: 'nts-message-by-category-tabs',
  templateUrl: './message-by-category-tabs.component.html',
  styleUrls: ['./message-by-category-tabs.component.css']
})
export class MessageByCategoryTabsComponent implements OnInit {

  // TODO
  categories$ = of([
    { id: 1, text: 'Primary', value: 'primary' },
    { id: 2, text: 'Offers', value: 'offers' },
    { id: 3, text: 'Notifications', value: 'notifications' },
  ]);

  // TODO
  tabSelectedIndex$ = of(1);

  // TODO
  allMessages$ = of([
    { id: 100, title: 'qqq', content: 'gggg', categoryId: 1 },
    { id: 200, title: 'imba', content: 'imb', categoryId: 1 },
    { id: 300, title: 'aa', content: 'a', categoryId: 1 },
    { id: 400, title: 'r', content: 'rrr', categoryId: 1 },

    { id: 1000, title: 'batman', content: 'lorem ips', categoryId: 2 },
    { id: 2000, title: 'spider-man', content: 'smth', categoryId: 2 },
    { id: 4000, title: 'bob', content: 'smith', categoryId: 2 },

    { id: 10, title: 'js weekly', content: 'js lorem ips', categoryId: 3 },
    { id: 30, title: 'jQuery', content: 'jq lorem', categoryId: 3 },
    { id: 40, title: 'angular', content: 'ng lorem', categoryId: 3 }
  ]);

  private iconsMap = {
    primary: 'inbox',
    offers: 'local_offer',
    notifications: 'info'
  };

  // TODO
  private unreadByCategoriesMap = {
    [1]: of(faker.random.number(15)),
    [2]: of(faker.random.number(11)),
    [3]: of(faker.random.number(19)),
  };

  // TODO
  private totalCategoriesMap = {
    [1]: of(faker.random.number(25)),
    [2]: of(faker.random.number(21)),
    [3]: of(faker.random.number(29)),
  };

  constructor(private store: Store<SliceState>) { }

  selectMessageHandler(category: models.CategoryEntity, selectedIds: number[]) {
    console.log('selected ids', selectedIds);
    // TODO: select messages in category
  }

  getUnreadCountBy$(category: models.CategoryEntity): Observable<number> {
    const { id } = category;
    // TODO
    return this.unreadByCategoriesMap[id];
  }

  getTotalCountBy$(category: models.CategoryEntity): Observable<number> {
    const { id } = category;
    // TODO
    return this.totalCategoriesMap[id];
  }

  getMessagesBy$(category: models.CategoryEntity): Observable<models.MessageEntity[]> {
    // TODO
    return of([]);
  }

  getSelectedMessageIdsBy$(category: models.CategoryEntity): Observable<number[]> {
    // TODO
    return of([100, 200, 1000, 2000, 10, 30]);
  }

  categoryChangeHandler(index: number) {
    // TODO: changeCategoryByIndex
  }

  getIconBy(category: models.CategoryEntity): string {
    return this.iconsMap[category.value];
  }

  ngOnInit() {
    // TODO: loadMyMailData
  }
}
