import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FormsTasksRoutingModule } from './forms-tasks-routing.module';
import { FormsTasksComponent } from './pages/forms-tasks/forms-tasks.component';
import { MySimpleFormComponent } from './components/my-simple-form/my-simple-form.component';
import { MyFormValidationTaskComponent } from './components/my-form-validation-task/my-form-validation-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInfoComponent } from './components/form-info/form-info.component';

@NgModule({
  declarations: [
    FormsTasksComponent,
    MySimpleFormComponent,
    MyFormValidationTaskComponent,
    FormInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    FormsTasksRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormsTasksModule {
}
