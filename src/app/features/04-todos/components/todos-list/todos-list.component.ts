import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
} from '@angular/core';

import { TodoModel } from '../../models/todo.model';

@Component({
  selector: 'nts-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent<T extends TodoModel> implements OnInit {

  @Input() items: T[] | null;

  @Output() deleteItem = new EventEmitter<T>();

  ngOnInit() {
  }

  deleteTodo(todo: T) {
    this.deleteItem.emit(todo);
  }

  hasItems() {
    return this.items && this.items.length > 0;
  }
}
