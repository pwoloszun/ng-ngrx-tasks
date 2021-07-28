import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface TodoFormVm {
  title: string;
  description?: string;
}

@Component({
  selector: 'nts-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  @Output() createItem: EventEmitter<TodoFormVm> = new EventEmitter<TodoFormVm>();

  title: string;
  description: string;

  public onSubmit() {
    const { title, description } = this;
    this.createItem.emit({
      title,
      description
    });
  }

  ngOnInit() {
    this.resetForm();
  }

  private resetForm() {
    this.title = '';
    this.description = '';
  }
}
