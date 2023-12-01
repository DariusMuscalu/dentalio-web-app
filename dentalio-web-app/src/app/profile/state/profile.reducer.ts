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
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProfileState = {
  user: null,
  error: null,
  status: 'pending',
};

export const profileReducer = createReducer(
  initialState,

  // === FETCH USER DATA === 
  on(fetchUserData, (state) => ({ ...state, status: <const>'loading' })),

  on(fetchUserDataSuccess, (state, { user }) => ({
    ...state,
    user: user,
    error: null,
    status: <const>'success',
  })),

  on(fetchUserDataFailure, (state, { error }) => ({
    ...state,
    error,
    status: <const>'error',
  })),

  // === UPDATE USER DATA ===
  on(updateUserData, (state) => ({ ...state, status: <const>'loading' })),

  on(updateUserDataSuccess, (state, { updatedUserData }) => ({
    ...state,
    user: updatedUserData,
    error: null,
    status: <const>'success',
  })),

  on(updateUserDataFailure, (state, { error }) => ({
    ...state,
    error,
    status: <const>'error',
  }))
);
