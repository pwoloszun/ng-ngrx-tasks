import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap, withLatestFrom, tap } from 'rxjs/operators';
import { EMPTY, of, from, combineLatest, Observable } from 'rxjs';
import { findIndex } from 'lodash';

import { MessagesApiService } from '../api/messages-api.service';
import { CategoriesApiService } from '../api/categories-api.service';

import * as MyMailActions from './my-mail.actions';
import { AppState } from './my-mail.reducer';
import { } from './my-mail.selectors';
import { hasExpired } from './helpers/has-expired';
import { MessageEntity } from './my-mail.models';

const MESSAGES_TTL = 2 * 60000;

@Injectable()
export class MyMailEffects {

  private loadedMessages$ = of([]);

  private isMessagesCacheExpired$ = of(true);

  // TODO
  // loadCategories$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MyMailActions.loadMyMailDataRequest),
  //     // TODO
  //   );
  // });

  // TODO
  // loadMessages$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MyMailActions.loadMyMailDataRequest),
  //     // TODO
  //   );
  // });

  // TODO
  // createMessage$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MyMailActions.createMessageRequest),
  //     // TODO
  //   );
  // });

  // TODO
  // moveMessagesToCategory$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MyMailActions.changeMessageCategoryRequest),
  //     // TODO
  //   );
  // });

  // TODO
  // showMessageDetails$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(MyMailActions.showMessageDetailsRequest),
  //     // TODO
  //   );
  // });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private categoriesApi: CategoriesApiService,
    private messagesApi: MessagesApiService
  ) { }

}
