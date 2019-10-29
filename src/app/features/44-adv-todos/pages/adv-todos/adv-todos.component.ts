import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { actions, selectors } from '../../store/todos';
import { Todo, ITEM_STATUS } from '../../store/todos/todos.models';
import { selectTodosStatuses } from '../../store/todos/todos.selectors';

@Component({
  selector: 'nts-adv-todos',
  templateUrl: './adv-todos.component.html',
  styleUrls: ['./adv-todos.component.css']
})
export class AdvTodosComponent implements OnInit {

  todos$ = this.store.pipe(
    select(selectors.selectTodosAll),
  );
  statuses$ = this.store.pipe(
    select(selectors.selectTodosStatuses),
  );
  isFetchingMany$ = this.store.pipe(
    select(selectors.selectTodosIsFetchingMany),
  );

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
    this.store.dispatch(actions.loadManyTodosRequest());
  }

  handleRemove(todo: Todo) {
    this.store.dispatch(actions.deleteSingleTodoRequest({ id: todo.id }));

    // TODO: remove below code
    // const index = todo.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.removing;
    // setTimeout(() => {
    //   this.statuses[index] = ITEM_STATUS.persisted;
    // }, 1800);
  }

  handleEdit(todo: Todo) {
    this.store.dispatch(actions.startEditSingleTodo({ id: todo.id }));

    // TODO: remove below code
    // const index = todo.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.editing;
  }

  handleSaveEdit({ item, data }) {
    const { id } = item;
    const todoUpdate = {
      id,
      changes: data,
    };
    this.store.dispatch(actions.optimisticUpdateSingleTodoRequest({ todoUpdate }));

    // TODO: remove below code
    // const index = item.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.saving;
    // setTimeout(() => {
    //   this.statuses[index] = ITEM_STATUS.persisted;
    // }, 1800);
  }

  handleCancelEdit(todo: Todo) {
    this.store.dispatch(actions.endEditSingleTodo({ id: todo.id }));

    // TODO: remove below code
    // const index = todo.id / 100 - 1;
    // this.statuses[index] = ITEM_STATUS.persisted;
  }

}
