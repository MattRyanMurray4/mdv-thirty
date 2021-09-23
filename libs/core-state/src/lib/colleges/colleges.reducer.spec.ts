import { Action } from '@ngrx/store';

import * as CollegesActions from './colleges.actions';
import { CollegesEntity } from './colleges.models';
import { State, initialState, reducer } from './colleges.reducer';

describe('Colleges Reducer', () => {
  const createCollegesEntity = (id: string, name = ''): CollegesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Colleges actions', () => {
    it('loadCollegesSuccess should return the list of known Colleges', () => {
      const colleges = [
        createCollegesEntity('PRODUCT-AAA'),
        createCollegesEntity('PRODUCT-zzz'),
      ];
      const action = CollegesActions.loadCollegesSuccess({ colleges });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
