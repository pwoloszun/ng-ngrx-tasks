import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { TodosService, Todo } from '../../../../core/api/todos.service';
import { TodoFormVm } from '../../components/todos-form/todos-form.component';

@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo) {
    this.todosService.remove(todo).pipe(
      mergeMap(() => this.todosService.getAll())
    ).subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  createTodo(todoData: TodoFormVm) {
    this.todosService.create(todoData).pipe(
      mergeMap(() => this.todosService.getAll())
    ).subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }
}
