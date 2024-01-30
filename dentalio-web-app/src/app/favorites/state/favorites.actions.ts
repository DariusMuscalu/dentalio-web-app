import { createAction, props } from '@ngrx/store';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';

export const fetchFavorites = createAction('[Favorites] Fetch Favorites');

export const fetchFavoritesSuccess = createAction(
  '[Favorites] Fetch Favorites Success',
  props<{ favoriteCabinetProfiles: CabinetProfileM[] }>()
);

export const fetchFavoritesFailure = createAction(
  '[Favorites] Fetch Favorites Failure',
  props<{ error: string }>()
);

export const addFavorite = createAction(
  '[Favorites] Add Cabinet Profile to Favorites',
  props<{ profileId: string }>()
);

export const addFavoriteSuccess = createAction(
  '[Favorites] Add Cabinet Profile to Favorites Success',
  props<{ profileId: string }>()
);

export const addFavoriteFailure = createAction(
  '[Favorites] Add Cabinet Profile to Favorites Failure',
  props<{ error: string }>()
);

export const removeFavorite = createAction(
  '[Favorites] Remove Cabinet Profile from Favorites',
  props<{ profileId: string }>()
);

export const removeFavoriteSuccess = createAction(
  '[Favorites] Remove Cabinet Profile from Favorites Success',
  props<{ profileId: string }>()
);

export const removeFavoriteFailure = createAction(
  '[Favorites] Remove Cabinet Profile from Favorites Failure',
  props<{ error: string }>()
);
