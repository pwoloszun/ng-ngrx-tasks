import { Component, OnInit } from '@angular/core';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
import { TodoModel } from '../../models/todo.model';
import { TODOS_DATA } from '../../fake-data/todos-data';

// Container / Smart Component
// "MVC Controller"
@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  todos: TodoModel[] = [];

  ngOnInit() {
    this.todos = TODOS_DATA;
  }

  deleteTodo(todo: TodoModel) {
    console.log('del', todo);

    // TODO
  }

  createTodo(todoData: TodoFormVm) {
    console.log('creat', todoData);

    // TODO
  }
}
