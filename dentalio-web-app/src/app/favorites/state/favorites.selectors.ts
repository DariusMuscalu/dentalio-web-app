import { createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.reducer';
import { AppState } from 'src/app/app.state';

export const selectFavoriteCabinetProfiles = (state: AppState) =>
  state.favoriteCabinetProfiles;
export const selectAllFavoriteCabinetProfiles = createSelector(
  selectFavoriteCabinetProfiles,
  (state: FavoritesState) => state.favoriteCabinetProfiles
);

export const selectFavoriteCabinetProfilesStatus = createSelector(
  selectFavoriteCabinetProfiles,
  (state) => state.status
);

export const selectFavoriteIds = createSelector(
  selectFavoriteCabinetProfiles,
  (state: FavoritesState) => state.favoriteCabinetProfilesIds
);
