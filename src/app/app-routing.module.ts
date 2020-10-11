import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/04-todos/todos.module').then(m => m.TodosModule),
  },
  {
    path: 'dynamic-components',
    loadChildren: () => import('./features/12-dynamic-components/dynamic-components.module').then(m => m.DynamicComponentsModule),
  },
  {
    path: 'custom-directives',
    loadChildren: () => import('./features/13-custom-directives/custom-directives.module').then(m => m.CustomDirectivesModule),
  },
  {
    path: 'content-projection',
    loadChildren: () => import('./features/21-content-projection/content-projection.module').then(m => m.ContentProjectionModule),
  },

  {
    path: 'ngrx-basics',
    loadChildren: () => import('./features/41-ngrx-basics/ngrx-basics.module').then(m => m.NgrxBasicsModule),
  },
  {
    path: 'ngrx-async-flow',
    loadChildren: () => import('./features/42-ngrx-async-flow/ngrx-async-flow.module').then(m => m.NgrxAsyncFlowModule),
  },
  {
    path: 'async-flow-refactored',
    loadChildren: () => import('./features/43-async-flow-refactored/async-flow-refactored.module').then(m => m.AsyncFlowRefactoredModule),
  },
  {
    path: 'adv-todos',
    loadChildren: () => import('./features/44-adv-todos/adv-todos.module').then(m => m.AdvTodosModule),
  },
  {
    path: 'many-room-detectors',
    loadChildren: () => import('./features/46-many-room-detectors/many-room-detectors.module').then(m => m.ManyRoomDetectorsModule),
  },
  {
    path: 'my-mail',
    loadChildren: () => import('./features/47-my-mail/my-mail.module').then(m => m.MyMailModule),
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
