import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchCabinetProfileById,
  fetchCabinetProfileByIdFailure,
  fetchCabinetProfileByIdSuccess,
  fetchCabinetProfiles,
  fetchCabinetProfilesFailure,
  fetchCabinetProfilesSuccess,
} from './cabinet-profiles.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { CabinetProfilesService } from 'src/app/cabinet-profiles/cabinet-profiles.service';

@Injectable()
export class CabinetProfilesEffects {
  constructor(
    private actions$: Actions,
    private cabinetProfilesService: CabinetProfilesService
  ) {}

  fetchCabinetProfiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCabinetProfiles),
      switchMap((action) => {
        const { service, location } = action;

        return from(
          this.cabinetProfilesService.getCabinetProfiles(service, location)
        ).pipe(
          map((cabinetProfiles) =>
            fetchCabinetProfilesSuccess({ cabinetProfiles: cabinetProfiles })
          ),
          // If errors return a new failure action
          catchError((error) => of(fetchCabinetProfilesFailure({ error })))
        );
      })
    )
  );

  fetchCabinetProfileById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCabinetProfileById),
      switchMap((action) =>
        this.cabinetProfilesService
          .getCabinetProfileById(action.cabinetId)
          .pipe(
            map((cabinetProfile) =>
              fetchCabinetProfileByIdSuccess({ cabinetProfile })
            ),
            // If errors return a new failure action
            catchError((error) => of(fetchCabinetProfileByIdFailure({ error })))
          )
      )
    )
  );
}
