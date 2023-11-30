import { createSelector } from '@ngrx/store';
import { CabinetProfilesState } from '../../cabinet-profiles/state/cabinet-profiles.reducer';
import { AppState } from 'src/app/app.state';

export const selectCabinetProfiles = (state: AppState) => state.cabinetProfiles;
export const selectAllCabinetProfiles = createSelector(
  selectCabinetProfiles,
  (state: CabinetProfilesState) => state.cabinetProfiles
);

export const selectCabinetProfileById = createSelector(
  selectCabinetProfiles,
  (state: CabinetProfilesState) => state.selectedCabinetProfile
);

export const selectCabinetProfileByIdStatus = createSelector(
  selectCabinetProfiles,
  (state) => state.status
);