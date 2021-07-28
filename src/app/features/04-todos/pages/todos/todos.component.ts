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
    // const index = this.todos.indexOf(todo);
    // if (index > -1) {
    //   this.todos.splice(index, 1);
    // }
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  createTodo(todoData: TodoFormVm) {
    console.log('creat', todoData);
    const { title, description } = todoData;
    const id = Math.random();

    const newTodo = { id, title, description };
    // this.todos.push(newTodo);
    this.todos = [...this.todos, newTodo];
  }
}
