import { createFeatureSelector, createSelector } from '@ngrx/store';
import { indexOf, orderBy } from 'lodash';

import {
  categoryAdapter,
  myMailFeatureKey,
  SliceState,
  messageAdapter,
} from './my-mail.reducer';
import { MessageEntity } from './my-mail.models';

export const selectFeatureSlice = createFeatureSelector<SliceState>(myMailFeatureKey);

// categories list selectors
const categorySelectors = categoryAdapter.getSelectors();

export const selectCategories = createSelector(
  selectFeatureSlice,
  (state: SliceState) => categorySelectors.selectAll(state.categories)
);

const selectCategoryEntities = createSelector(
  selectFeatureSlice,
  (state: SliceState) => categorySelectors.selectEntities(state.categories)
);


// messages list selectors
const messageSelectors = messageAdapter.getSelectors();

// TODO selectMessageEntities

// TODO selectMessages



// message details selectors


// categories stats
