import { CollegesEntity } from './colleges.models';
import {
  collegesAdapter,
  CollegesPartialState,
  initialState,
} from './colleges.reducer';
import * as CollegesSelectors from './colleges.selectors';

describe('Colleges Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCollegesId = (it: CollegesEntity) => it.id;
  const createCollegesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CollegesEntity);

  let state: CollegesPartialState;

  beforeEach(() => {
    state = {
      colleges: collegesAdapter.setAll(
        [
          createCollegesEntity('PRODUCT-AAA'),
          createCollegesEntity('PRODUCT-BBB'),
          createCollegesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Colleges Selectors', () => {
    it('getAllColleges() should return the list of Colleges', () => {
      const results = CollegesSelectors.getAllColleges(state);
      const selId = getCollegesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CollegesSelectors.getSelected(state) as CollegesEntity;
      const selId = getCollegesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCollegesLoaded() should return the current "loaded" status', () => {
      const result = CollegesSelectors.getCollegesLoaded(state);

      expect(result).toBe(true);
    });

    it('getCollegesError() should return the current "error" state', () => {
      const result = CollegesSelectors.getCollegesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
