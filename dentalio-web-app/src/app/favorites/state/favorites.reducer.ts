import { createReducer, on } from '@ngrx/store';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';
import {
  addFavorite,
  addFavoriteFailure,
  addFavoriteSuccess,
  fetchFavorites,
  fetchFavoritesFailure,
  fetchFavoritesSuccess,
  removeFavorite,
  removeFavoriteFailure,
  removeFavoriteSuccess,
} from './favorites.actions';

export interface FavoritesState {
  favoriteCabinetProfiles: CabinetProfileM[];
  favoriteCabinetProfilesIds: string[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: FavoritesState = {
  favoriteCabinetProfiles: [],
  favoriteCabinetProfilesIds: [],
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
  on(fetchFavoritesSuccess, (state, { favoriteCabinetProfiles }) => {
    const favoriteCabinetProfilesIds = favoriteCabinetProfiles.map(
      (profile) => profile.id
    );

    return {
      ...state,
      favoriteCabinetProfiles: favoriteCabinetProfiles,
      favoriteCabinetProfilesIds: favoriteCabinetProfilesIds,
      error: null,
      status: <const>'success',
    };
  }),

  // Handle favorite cabinet profiles fetch failure.
  on(fetchFavoritesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: <const>'error',
  })),

  on(addFavorite, (state, { profileId }) => {
    // Add the profileId to the list of favorites
    const favoriteCabinetProfilesIds = [
      ...state.favoriteCabinetProfilesIds,
      profileId,
    ];

    return {
      ...state,
      favoriteCabinetProfilesIds,
      status: <const>'loading', // You may want to set this to 'loading' or 'pending' depending on your UI needs
    };
  }),

  on(addFavoriteSuccess, (state, { profileId }) => {
    return {
      ...state,
      status: <const>'success',
    };
  }),

  on(addFavoriteFailure, (state, { error }) => ({
    ...state,
    error,
    status: <const>'error',
  })),

  on(removeFavorite, (state, { profileId }) => {
    // Remove the profileId from the list of favorites
    const favoriteCabinetProfilesIds = state.favoriteCabinetProfilesIds.filter(
      (id) => id !== profileId
    );

    return {
      ...state,
      favoriteCabinetProfilesIds,
      status: <const>'loading', // You may want to set this to 'loading' or 'pending' depending on your UI needs
    };
  }),

  on(removeFavoriteSuccess, (state, { profileId }) => {
    return {
      ...state,
      status: <const>'success',
    };
  }),

  on(removeFavoriteFailure, (state, { error }) => ({
    ...state,
    error,
    status: <const>'error',
  }))
);
