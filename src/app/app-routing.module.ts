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
    path: 'component-basics',
    loadChildren: () => import('./features/01-component-basics/component-basics.module').then(m => m.ComponentBasicsModule),
  },
  {
    path: 'binding-examples',
    loadChildren: () => import('./features/02-binding-examples/binding-examples.module').then(m => m.BindingExamplesModule),
  },
  {
    path: 'inputs-outputs-examples',
    loadChildren: () => import('./features/03-inputs-outputs-examples/inputs-outputs-examples.module')
      .then(m => m.InputsOutputsExamplesModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/04-todos/todos.module').then(m => m.TodosModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./features/08-heroes/heroes.module').then(m => m.HeroesModule),
  },
  {
    path: 'cities',
    loadChildren: () => import('./features/09-cities/cities.module').then(m => m.CitiesModule),
  },
  {
    path: 'real-estates',
    loadChildren: () => import('./features/10-real-estates/real-estates.module').then(m => m.RealEstatesModule),
  },
  {
    path: 'forms-tasks',
    loadChildren: () => import('./features/11-forms-tasks/forms-tasks.module').then(m => m.FormsTasksModule),
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

  // TODO
  {
    path: 'rxjs-gui-tasks',
    loadChildren: () => import('./features/39-rxjs-gui-tasks/rxjs-gui-tasks.module').then(m => m.RxjsGuiTasksModule),
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

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
