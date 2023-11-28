import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
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
      switchMap(() =>
        from(this.cabinetProfilesService.getCabinetProfiles()).pipe(
          map((cabinetProfiles) =>
            fetchCabinetProfilesSuccess({ cabinetProfiles: cabinetProfiles })
          ),
          // If errors return a new failure action
          catchError((error) => of(fetchCabinetProfilesFailure({ error })))
        )
      )
    )
  );
}
