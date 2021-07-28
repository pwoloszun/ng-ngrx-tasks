import { Component, OnInit } from '@angular/core';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
import { TodoModel } from '../../models/todo.model';
import { TODOS_DATA } from '../../fake-data/todos-data';
import { ManageTodosService } from '../../services/manage-todos.service';

// Container / Smart Component
// "MVC Controller"
@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  get todos() {
    return this.manageTodosService.todos;
  }

  // App Service aka App Facade
  constructor(private manageTodosService: ManageTodosService) {
  }

  ngOnInit() {
    this.manageTodosService.loadAll();
  }

  deleteTodo(todo: TodoModel) {
    this.manageTodosService.removeTodo(todo);
  }

  createTodo(todoData: TodoFormVm) {
    const { title, description } = todoData;
    this.manageTodosService.createTodo(title, description);
  }
}
