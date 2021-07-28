import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {

  todos: TodoModel[] = [];


  constructor() { }

  loadAll(): void {
    //TODO
  }

  createTodo(title: string, description?: string): void {
    //TODO

  }

  removeTodo(todo: TodoModel): void {
    //TODO

  }
}
