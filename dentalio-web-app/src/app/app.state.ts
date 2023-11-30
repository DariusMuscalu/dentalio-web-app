import { CabinetProfilesState } from './cabinet-profiles/state/cabinet-profiles.reducer';
import { FavoritesState } from './favorites/state/favorites.reducer';

export interface AppState {
  cabinetProfiles: CabinetProfilesState;
  favoriteCabinetProfiles: FavoritesState;
}
