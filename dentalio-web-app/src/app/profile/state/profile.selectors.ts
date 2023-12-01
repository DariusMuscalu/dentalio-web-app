import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.reducer';

export const selectProfileState =
  createFeatureSelector<ProfileState>('profile');

export const selectUser = createSelector(
  selectProfileState,
  (state: ProfileState) => state.user
);

export const selectError = createSelector(
  selectProfileState,
  (state: ProfileState) => state.error
);

export const selectStatus = createSelector(
  selectProfileState,
  (state: ProfileState) => state.status
);

export const selectIsPending = createSelector(
  selectStatus,
  (status) => status === 'pending'
);

export const selectIsLoading = createSelector(
  selectStatus,
  (status) => status === 'loading'
);

export const selectIsSuccess = createSelector(
  selectStatus,
  (status) => status === 'success'
);
