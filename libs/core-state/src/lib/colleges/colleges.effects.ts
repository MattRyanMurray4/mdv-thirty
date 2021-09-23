import { Injectable } from '@angular/core';
import { College } from '@make-app/api-interfaces';
import { CollegesService } from '@make-app/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  loadCollege,
  loadCollegeFailure,
  loadColleges,
  loadCollegesFailure,
  loadCollegesSuccess,
  loadCollegeSuccess,
} from './colleges.actions';

@Injectable()
export class CollegesEffects {
  loadColleges$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadColleges),
      switchMap(() =>
        this.collegesService.all().pipe(
          tap(console.log),
          map((colleges: College[]) => loadCollegesSuccess({ colleges })),
          catchError((error) => of(loadCollegesFailure({ error })))
        )
      )
    )
  );

  loadCollege$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCollege),
      switchMap(({ collegeId }) =>
        this.collegesService.find(collegeId).pipe(
          tap(console.log),
          map((college: College) => loadCollegeSuccess({ college })),
          catchError((error) => of(loadCollegeFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private collegesService: CollegesService
  ) {}
}
