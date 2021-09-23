import { ActionReducerMap } from '@ngrx/store';
import { COLLEGES_FEATURE_KEY } from '..';
import { collegesReducer, CollegesState } from './colleges/colleges.reducer';

export interface AppState {
  [COLLEGES_FEATURE_KEY]: CollegesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [COLLEGES_FEATURE_KEY]: collegesReducer,
};
