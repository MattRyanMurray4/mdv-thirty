import { College } from '@make-app/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const init = createAction('[Colleges Page] Init');

// SELECT

export const selectCollege = createAction(
  '[COLLEGE] Selected A College',
  props<{ collegeId: string }>()
);

// ALL

export const loadColleges = createAction('[COLLEGES] Load All Colleges');

export const loadCollegesSuccess = createAction(
  '[COLLEGES] Loaded All Colleges Success',
  props<{ colleges: College[] }>()
);

export const loadCollegesFailure = createAction(
  '[COLLEGES] Loaded All Colleges Failure',
  props<{ error: any }>()
);

// SINGULAR

export const loadCollege = createAction(
  '[COLLEGE] Load A College',
  props<{ collegeId: string }>()
);
export const loadCollegeSuccess = createAction(
  '[COLLEGE] Loaded College Success',
  props<{ college: College }>()
);
export const loadCollegeFailure = createAction(
  '[COLLEGE] Loaded College Failure',
  props<{ error: any }>()
);
