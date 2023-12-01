import { createReducer, on } from '@ngrx/store';
import { UserM } from 'src/app/shared/services/user.model';
import {
  fetchUserData,
  fetchUserDataFailure,
  fetchUserDataSuccess,
  updateUserData,
  updateUserDataFailure,
  updateUserDataSuccess,
} from './profile.actions';

export interface ProfileState {
  user: UserM | null;
  fetchStatus: 'pending' | 'loading' | 'error' | 'success';
  updateStatus: 'pending' | 'loading' | 'error' | 'success';
  error: string;
}

export const initialState: ProfileState = {
  user: null,
  error: null,
  fetchStatus: 'pending',
  updateStatus: 'pending',
};

export const profileReducer = createReducer(
  initialState,

  // === FETCH USER DATA ===
  on(fetchUserData, (state) => ({ ...state, fetchStatus: <const>'loading' })),

  on(fetchUserDataSuccess, (state, { user }) => ({
    ...state,
    user: user,
    error: null,
    fetchStatus: <const>'success',
  })),

  on(fetchUserDataFailure, (state, { error }) => ({
    ...state,
    error,
    fetchStatus: <const>'error',
  })),

  // === UPDATE USER DATA ===
  on(updateUserData, (state) => ({ ...state, updateStatus: <const>'loading' })),

  on(updateUserDataSuccess, (state, { updatedUserData }) => ({
    ...state,
    user: updatedUserData,
    error: null,
    updateStatus: <const>'success',
  })),

  on(updateUserDataFailure, (state, { error }) => ({
    ...state,
    error,
    updateStatus: <const>'error',
  }))
);
