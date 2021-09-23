import { College, emptyCollege } from '@make-app/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COLLEGES_FEATURE_KEY,
  CollegesState,
  collegesAdapter,
} from './colleges.reducer';

// Lookup the 'Colleges' feature state managed by NgRx
export const getCollegesState =
  createFeatureSelector<CollegesState>(COLLEGES_FEATURE_KEY);

const { selectAll, selectEntities } = collegesAdapter.getSelectors();

export const getCollegesLoaded = createSelector(
  getCollegesState,
  (state: CollegesState) => state.loaded
);

export const getCollegesError = createSelector(
  getCollegesState,
  (state: CollegesState) => state.error
);

export const getAllColleges = createSelector(
  getCollegesState,
  (state: CollegesState) => selectAll(state)
);

export const getCollegesEntities = createSelector(
  getCollegesState,
  (state: CollegesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCollegesState,
  (state: CollegesState) => state.selectedId
);

export const getSelected = createSelector(
  getCollegesEntities,
  getSelectedId,
  (entities, selectedId) =>
    (selectedId ? entities[selectedId] : emptyCollege) as College
);
