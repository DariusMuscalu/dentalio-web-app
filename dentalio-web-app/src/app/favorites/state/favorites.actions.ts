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

// TODO Add the addCabinetProfileToFavorites and removeCabinetProfileFromFavorites