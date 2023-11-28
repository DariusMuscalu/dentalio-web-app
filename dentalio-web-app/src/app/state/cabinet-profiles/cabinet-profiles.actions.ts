import { createAction, props } from '@ngrx/store';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';

export const fetchCabinetProfiles = createAction(
  '[Discover Page] Fetch Cabinet Profiles'
);

export const fetchCabinetProfilesSuccess = createAction(
  '[Discover Page] Fetch Cabinet Profiles Success',
  props<{ cabinetProfiles: CabinetProfileM[] }>()
);

export const fetchCabinetProfilesFailure = createAction(
  '[Discover Page] Fetch Cabinet Profiles Failure',
  props<{ error: string }>()
);
