import { CabinetProfilesState } from './cabinet-profiles/state/cabinet-profiles.reducer';
import { FavoritesState } from './favorites/state/favorites.reducer';
import { ProfileState } from './profile/state/profile.reducer';

export interface AppState {
  cabinetProfiles: CabinetProfilesState;
  favoriteCabinetProfiles: FavoritesState;
  profile: ProfileState;
}
