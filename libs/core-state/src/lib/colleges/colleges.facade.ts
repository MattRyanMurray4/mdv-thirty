import { Injectable } from '@angular/core';
import { College } from '@make-app/api-interfaces';
import { Action, select, Store } from '@ngrx/store';
import * as CollegesActions from './colleges.actions';
import * as CollegesSelectors from './colleges.selectors';

@Injectable()
export class CollegesFacade {
  loaded$ = this.store.pipe(select(CollegesSelectors.getCollegesLoaded));
  allColleges$ = this.store.pipe(select(CollegesSelectors.getAllColleges));
  selectedColleges$ = this.store.pipe(select(CollegesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(CollegesActions.init());
  }

  loadColleges() {
    return this.store.dispatch(CollegesActions.loadColleges());
  }

  loadCollege(collegeId: string) {
    return this.store.dispatch(CollegesActions.loadCollege({ collegeId }));
  }

  selectCollege(collegeId: string) {
    return this.store.dispatch(CollegesActions.selectCollege({ collegeId }));
  }

  private dispatch(action: Action) {
    return this.store.dispatch(action);
  }
}
