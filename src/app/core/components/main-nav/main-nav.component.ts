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
    { text: 'Todos', url: '/todos' },

    { text: 'Dynamic Comp.', url: '/dynamic-components' },
    { text: 'Custom Directives', url: '/custom-directives' },
    { text: 'Content Projection', url: '/content-projection' },

    { text: 'NgRx Basics', url: '/ngrx-basics' },
    { text: 'NgRx Async Flow', url: '/ngrx-async-flow' },
    { text: 'Async Flow refactored', url: '/async-flow-refactored' },

    { text: 'Adv. Todos', url: '/adv-todos' },
    { text: 'Many room detectors', url: '/many-room-detectors' },
    { text: 'MyMail', url: '/my-mail' },

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
