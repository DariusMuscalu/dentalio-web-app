import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { FavoritesService } from 'src/app/favorites/favorites.service';
import { CabinetProfilesService } from 'src/app/cabinet-profiles/cabinet-profiles.service';
import { Observable, combineLatest, forkJoin, from, of } from 'rxjs';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';
import {
  fetchFavorites,
  fetchFavoritesFailure,
  fetchFavoritesSuccess,
} from './favorites.actions';

@Injectable()
export class FavoritesEffects {
  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService,
    private cabinetProfilesService: CabinetProfilesService
  ) {}

  fetchFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFavorites),
      switchMap(() =>
        this.favoritesService.getUserFavoritesIds().pipe(
          switchMap((userFavoritesIds: string[]) => {
            const fetchCabinetProfiles$ = userFavoritesIds.map((cabinetId) =>
              this.cabinetProfilesService.getCabinetProfileById(cabinetId).pipe(
                catchError((error) => {
                  console.error('Error fetching Cabinet Profile:', error);
                  // Handle error for individual Cabinet Profile
                  // You can decide whether to return a default profile or throw an error
                  return of(null);
                })
              )
            );

            return combineLatest(fetchCabinetProfiles$).pipe(
              map((favoriteCabinetProfiles: CabinetProfileM[]) =>
                fetchFavoritesSuccess({
                  favoriteCabinetProfiles: favoriteCabinetProfiles.filter(
                    (profile) => profile !== null
                  ), // Filter out null profiles if any error occurred
                })
              ),
              catchError((error) => {
                console.error('Error fetching Cabinet Profiles:', error);
                return of(fetchFavoritesFailure({ error }));
              })
            );
          })
        )
      )
    )
  );
}
