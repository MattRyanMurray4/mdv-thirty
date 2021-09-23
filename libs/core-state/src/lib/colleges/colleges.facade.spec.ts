import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CollegesActions from './colleges.actions';
import { CollegesEffects } from './colleges.effects';
import { CollegesFacade } from './colleges.facade';
import { CollegesEntity } from './colleges.models';
import {
  COLLEGES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './colleges.reducer';
import * as CollegesSelectors from './colleges.selectors';

interface TestSchema {
  colleges: State;
}

describe('CollegesFacade', () => {
  let facade: CollegesFacade;
  let store: Store<TestSchema>;
  const createCollegesEntity = (id: string, name = ''): CollegesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(COLLEGES_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CollegesEffects]),
        ],
        providers: [CollegesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CollegesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allColleges$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allColleges$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCollegesSuccess` to manually update list
     */
    it('allColleges$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allColleges$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CollegesActions.loadCollegesSuccess({
          colleges: [createCollegesEntity('AAA'), createCollegesEntity('BBB')],
        })
      );

      list = await readFirst(facade.allColleges$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
