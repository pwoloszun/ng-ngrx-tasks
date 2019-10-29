import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsyncFlowRefactoredComponent } from './components/async-flow-refactored/async-flow-refactored.component';

const routes: Routes = [
  {
    path: '',
    component: AsyncFlowRefactoredComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncFlowRefactoredRoutingModule {
}
