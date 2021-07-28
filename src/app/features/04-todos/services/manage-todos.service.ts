import { Injectable } from '@angular/core';
import { TODOS_DATA } from '../fake-data/todos-data';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {

  todos: TodoModel[] = [];

  constructor() { }

  loadAll(): void {
    this.todos = TODOS_DATA;
  }

  createTodo(title: string, description?: string): void {
    const newTodo = {
      id: Math.random(),
      title,
      description
    }
    this.todos = [...this.todos, newTodo];
  }

  removeTodo(todo: TodoModel): void {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}
