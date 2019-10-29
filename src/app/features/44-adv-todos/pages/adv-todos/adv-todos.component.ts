import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { actions, selectors } from '../../store/todos';
import { Todo, ITEM_STATUS } from '../../store/todos/todos.models';

@Component({
  selector: 'nts-adv-todos',
  templateUrl: './adv-todos.component.html',
  styleUrls: ['./adv-todos.component.css']
})
export class AdvTodosComponent implements OnInit {

  // TODO
  todos$ = of([]);
  statuses$ = of([]);
  isFetchingMany$ = of(true);

  // TODO: remove below code
  // items = [
  //   { id: 100, title: 'buy milk', description: 'quickly' },
  //   { id: 200, title: 'walk dog' },
  //   { id: 300, title: 'do math', description: 'now' },
  //   { id: 400, title: 'batman', description: 'bob w.' },
  //   { id: 500, title: 'imba', description: 'qq' },
  // ];
  // statuses = [
  //   null,
  //   ITEM_STATUS.saving,
  //   ITEM_STATUS.editing,
  //   ITEM_STATUS.removing,
  //   ITEM_STATUS.persisted
  // ];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    // TODO: load many todos
  }

  handleRemove(todo: Todo) {
    // TODO: remove below code
    // const index = todo.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.removing;
    // setTimeout(() => {
    //   this.statuses[index] = ITEM_STATUS.persisted;
    // }, 1800);
  }

  handleEdit(todo: Todo) {
    // TODO: remove below code
    // const index = todo.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.editing;
  }

  handleSaveEdit({ item, data }) {
    // TODO: remove below code
    // const index = item.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.saving;
    // setTimeout(() => {
    //   this.statuses[index] = ITEM_STATUS.persisted;
    // }, 1800);
  }

  handleCancelEdit(todo: Todo) {
    // TODO: remove below code
    // const index = todo.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.persisted;
  }

}
