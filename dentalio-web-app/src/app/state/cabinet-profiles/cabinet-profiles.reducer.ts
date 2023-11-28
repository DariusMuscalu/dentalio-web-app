import { createReducer, on } from '@ngrx/store';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';
import {
  fetchCabinetProfileById,
  fetchCabinetProfileByIdFailure,
  fetchCabinetProfileByIdSuccess,
  fetchCabinetProfiles,
  fetchCabinetProfilesFailure,
  fetchCabinetProfilesSuccess,
} from './cabinet-profiles.actions';

export interface CabinetProfilesState {
  cabinetProfiles: CabinetProfileM[];
  selectedCabinetProfile: CabinetProfileM;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CabinetProfilesState = {
  cabinetProfiles: [],
  selectedCabinetProfile: null,
  error: null,
  status: 'pending',
};

export const cabinetProfilesReducer = createReducer(
  // Supply the initial state
  initialState,

  // Trigger fetching the cabinet profiles.
  on(fetchCabinetProfiles, (state) => ({
    ...state,
    status: <const>'loading',
  })),

  // Handle successfully fetched cabinet profiles.
  on(fetchCabinetProfilesSuccess, (state, { cabinetProfiles }) => ({
    ...state,
    cabinetProfiles: cabinetProfiles,
    error: null,
    status: <const>'success',
  })),

  // Handle cabinet profiles fetch failure.
  on(fetchCabinetProfilesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: <const>'error',
  })),

  // Trigger fetching the cabinet profile by id.
  on(fetchCabinetProfileById, (state) => ({
    ...state,
    status: <const>'loading',
  })),

  // Handle successfully fetched cabinet profile by id.
  on(fetchCabinetProfileByIdSuccess, (state, { cabinetProfile }) => ({
    ...state,
    selectedCabinetProfile: cabinetProfile,
    error: null,
    status: <const>'success',
  })),

  // Handle cabinet profile by id fetch failure.
  on(fetchCabinetProfileByIdFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: <const>'error',
  }))
);
