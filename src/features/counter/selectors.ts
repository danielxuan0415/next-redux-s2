import type { RootState } from '../../app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCount = (state: RootState) => state.counter.value;
export const countSelector = createSelector(selectCount, state => state);