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

// Selectors for Fetching User Data
export const selectFetchStatus = createSelector(
  selectProfileState,
  (state: ProfileState) => state.fetchStatus
);

export const selectIsFetchPending = createSelector(
  selectFetchStatus,
  (status) => status === 'pending'
);

export const selectIsFetchLoading = createSelector(
  selectFetchStatus,
  (status) => status === 'loading'
);

export const selectIsFetchSuccess = createSelector(
  selectFetchStatus,
  (status) => status === 'success'
);

// Selectors for Updating User Data
export const selectUpdateStatus = createSelector(
  selectProfileState,
  (state: ProfileState) => state.updateStatus
);

export const selectIsUpdatePending = createSelector(
  selectUpdateStatus,
  (status) => status === 'pending'
);

export const selectIsUpdateLoading = createSelector(
  selectUpdateStatus,
  (status) => status === 'loading'
);

export const selectIsUpdateSuccess = createSelector(
  selectUpdateStatus,
  (status) => status === 'success'
);
