import { createReducer, on } from '@ngrx/store';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';
import {
  fetchFavorites,
  fetchFavoritesFailure,
  fetchFavoritesSuccess,
} from './favorites.actions';

export interface FavoritesState {
  favoriteCabinetProfiles: CabinetProfileM[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: FavoritesState = {
  favoriteCabinetProfiles: [],
  error: null,
  status: 'pending',
};

export const favoritesReducer = createReducer(
  // Supply the initial state
  initialState,

  // Trigger fetching the favorite cabinet profiles.
  on(fetchFavorites, (state) => ({
    ...state,
    status: <const>'loading',
  })),

  // Handle successfully fetched cabinet profiles.
  on(fetchFavoritesSuccess, (state, { favoriteCabinetProfiles }) => ({
    ...state,
    favoriteCabinetProfiles: favoriteCabinetProfiles,
    error: null,
    status: <const>'success',
  })),

  // Handle favorite cabinet profiles fetch failure.
  on(fetchFavoritesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: <const>'error',
  }))
);
