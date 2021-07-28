import { TestBed } from '@angular/core/testing';

import { ManageTodosService } from './manage-todos.service';

describe('ManageTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageTodosService = TestBed.get(ManageTodosService);
    expect(service).toBeTruthy();
  });
});
