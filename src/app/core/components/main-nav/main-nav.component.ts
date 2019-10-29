import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  mainMenuLinks = [
    { text: 'Dashboard', url: '/' },
    { text: 'Comp. Basics', url: '/component-basics' },
    { text: 'Todos', url: '/todos' },
    { text: 'Real Estates', url: '/real-estates' },

    // { text: 'Bindings Types', url: '/bindings-examples' },
    // { text: 'Inputs/Outputs', url: '/inputs-outputs-examples' },
    // { text: 'Todos', url: '/todos' },
    // { text: 'Pipes', url: '/pipes-examples' },
    // { text: 'DI', url: '/di-examples' },
    // { text: 'Heroes', url: '/heroes' },
    // { text: 'Cities', url: '/cities' },
    // { text: 'Real Estates', url: '/real-estates' },
    // { text: 'Forms', url: '/my-forms' },

    { text: 'RxJS GUI tasks', url: '/rxjs-gui-tasks' },
    { text: 'NgRx Basics', url: '/ngrx-basics' },
    { text: 'NgRx Async Flow', url: '/ngrx-async-flow' },
    { text: 'Async Flow refactored', url: '/async-flow-refactored' },

    { text: 'Adv. Todos', url: '/adv-todos' },
    { text: 'Many room detectors', url: '/many-room-detectors' },

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
