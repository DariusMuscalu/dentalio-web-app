import { createAction, props } from '@ngrx/store';
import { UserM } from 'src/app/shared/services/user.model';

export const fetchUserData = createAction(
    '[Profile Page] Fetch User Data'
  );
  
  export const fetchUserDataSuccess = createAction(
    '[Profile Page] Fetch User Data Success',
    props<{ user: UserM }>()
  );
  
  export const fetchUserDataFailure = createAction(
    '[Profile Page] Fetch User Data Failure',
    props<{ error: any }>()
  );

export const updateUserData = createAction(
  '[Profile Page] Update User Data',
  props<{ newUserData: UserM }>()
);

export const updateUserDataSuccess = createAction(
  '[Profile Page] Update User Data Success',
  props<{ updatedUserData: UserM }>()
);

export const updateUserDataFailure = createAction(
  '[Profile Page] Update User Data Failure',
  props<{ error: any }>()
);
