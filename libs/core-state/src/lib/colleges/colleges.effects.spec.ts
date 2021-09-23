import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as CollegesActions from './colleges.actions';
import { CollegesEffects } from './colleges.effects';

describe('CollegesEffects', () => {
  let actions: Observable<Action>;
  let effects: CollegesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CollegesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CollegesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CollegesActions.init() });

      const expected = hot('-a-|', {
        a: CollegesActions.loadCollegesSuccess({ colleges: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
