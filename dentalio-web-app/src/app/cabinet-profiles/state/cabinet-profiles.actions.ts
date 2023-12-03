import { createAction, props } from '@ngrx/store';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';

export const fetchCabinetProfiles = createAction(
  '[Discover Page] Fetch Cabinet Profiles',
  props<{ service?: string; location?: string }>()
);

export const fetchCabinetProfilesSuccess = createAction(
  '[Discover Page] Fetch Cabinet Profiles Success',
  props<{ cabinetProfiles: CabinetProfileM[] }>()
);

export const fetchCabinetProfilesFailure = createAction(
  '[Discover Page] Fetch Cabinet Profiles Failure',
  props<{ error: string }>()
);

export const fetchCabinetProfileById = createAction(
  '[Discover Page] Fetch Cabinet Profile By Id',
  props<{ cabinetId: string }>()
);

export const fetchCabinetProfileByIdSuccess = createAction(
  '[Discover Page] Fetch Cabinet Profile By Id Success',
  props<{ cabinetProfile: CabinetProfileM }>()
);

export const fetchCabinetProfileByIdFailure = createAction(
  '[Discover Page] Fetch Cabinet Profile By Id Failure',
  props<{ error: string }>()
);
