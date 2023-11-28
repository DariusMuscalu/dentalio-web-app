import { createSelector } from '@ngrx/store';
import { CabinetProfilesState } from './cabinet-profiles.reducer';
import { AppState } from '../app.state';

export const selectCabinetProfiles = (state: AppState) => state.cabinetProfiles;
export const selectAllCabinetProfiles = createSelector(
  selectCabinetProfiles,
  (state: CabinetProfilesState) => state.cabinetProfiles
);
