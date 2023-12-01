import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, map, mergeMap, exhaustMap } from 'rxjs/operators';
import { ProfileService } from '../profile.service';
import {
  updateUserData,
  updateUserDataSuccess,
  updateUserDataFailure,
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataFailure,
} from './profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  updateUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserData),
      exhaustMap((action) =>
        from(this.profileService.updateUserData(action.newUserData)).pipe(
          map(() =>
            updateUserDataSuccess({ updatedUserData: action.newUserData })
          ),
          catchError((error) => of(updateUserDataFailure({ error })))
        )
      )
    )
  );

  fetchUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUserData),
      mergeMap(() =>
        this.profileService.getUserData().pipe(
          map((user) => fetchUserDataSuccess({ user })),
          catchError((error) => of(fetchUserDataFailure({ error })))
        )
      )
    )
  );
}
