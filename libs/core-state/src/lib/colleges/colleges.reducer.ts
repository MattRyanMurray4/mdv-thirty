import { College } from '@make-app/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as CollegesActions from './colleges.actions';

export const COLLEGES_FEATURE_KEY = 'colleges';

export interface CollegeAction extends Action {
  error: string;
}

export interface CollegesState extends EntityState<College> {
  selectedId?: string | number; // which Colleges record has been selected
  loaded: boolean; // has the Colleges list been loaded
  error?: string | null; // last known error (if any)
}

export interface CollegesPartialState {
  readonly [COLLEGES_FEATURE_KEY]: CollegesState;
}

export const collegesAdapter: EntityAdapter<College> =
  createEntityAdapter<College>();

export const initialState: CollegesState = collegesAdapter.getInitialState({
  loaded: false,
});

const setLoading = (state: CollegesState) => ({
  ...state,
  loaded: false,
  error: null,
});

const setFailure = (state: CollegesState, { error }: CollegeAction) => ({
  ...state,
  error,
});

const _collegesReducer = createReducer(
  initialState,
  on(CollegesActions.loadColleges, CollegesActions.loadCollege, setLoading),
  on(
    CollegesActions.loadCollegesFailure,
    CollegesActions.loadCollegeFailure,
    setFailure
  ),
  on(CollegesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CollegesActions.loadCollegesSuccess, (state, { colleges }) =>
    collegesAdapter.setAll(colleges, { ...state, loaded: true })
  ),
  on(CollegesActions.loadCollegeSuccess, (state, { college }) =>
    collegesAdapter.upsertOne(college, { ...state, loaded: true })
  ),
  on(CollegesActions.selectCollege, (state, { collegeId }) => ({
    ...state,
    selectedId: collegeId,
  }))
);

export function collegesReducer(
  state: CollegesState | undefined,
  action: Action
) {
  return _collegesReducer(state, action);
}
