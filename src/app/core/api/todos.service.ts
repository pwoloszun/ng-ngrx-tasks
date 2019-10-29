import { Injectable } from '@angular/core';

import { DataApiService } from './data-api.service';
import { Todo } from '../../features/44-adv-todos/store/todos/todos.models';

export {
  Todo
};

@Injectable()
export class TodosService extends DataApiService<Todo> {

  getUrl(): string {
    return '/api/todos';
  }

}
