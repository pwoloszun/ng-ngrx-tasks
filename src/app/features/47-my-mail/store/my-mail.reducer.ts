import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { produce } from 'immer';
import { reduce } from 'lodash';

import * as MyMailActions from './my-mail.actions';
import { CategoryEntity, MessageEntity } from './my-mail.models';

export const myMailFeatureKey = 'myMail';

// private details

// state shape
export interface SliceState {
  categories: EntityState<CategoryEntity>;
  // TODO message entities

  // TODO
}

export const categoryAdapter = createEntityAdapter<CategoryEntity>();
export const messageAdapter = createEntityAdapter<MessageEntity>();

export const initialState: SliceState = {
  categories: categoryAdapter.getInitialState(),

  // TODO
};

export const sliceReducer = createReducer(
  initialState,

  on(MyMailActions.loadMyMailDataRequest, state => state),

  // TODO: on loadCategoriesSuccess
  // TODO: on loadMessagesSuccess
);

export interface AppState {
  [myMailFeatureKey]: SliceState; // IMPORTANT: prop name must equal featureName
}
