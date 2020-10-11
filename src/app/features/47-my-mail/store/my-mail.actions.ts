import { createAction, props } from '@ngrx/store';

import { MessageEntity, CategoryEntity, MessageParams } from './my-mail.models';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

enum MyMailActionTypes {
  // TODO 1: load boath categories AND messages
  LoadMyMailDataRequest = '[MyMail] Load MyMail data Request',

  LoadCategoriesSuccess = '[MyMail] Load Categories Success',
  LoadCategoriesError = '[MyMail] Load Categories Error',

  LoadMessagesSuccess = '[MyMail] Load Messages Success',
  LoadMessagesError = '[MyMail] Load Messages Error',

  // TODO 2: create new message

  // TODO 3: change message category

  // TODO 4: change current category by index

  // TODO 5: show message details

}

export const loadMyMailDataRequest = createAction(
  MyMailActionTypes.LoadMyMailDataRequest
);

// TODO loadCategoriesSuccess

// TODO loadMessagesSuccess
