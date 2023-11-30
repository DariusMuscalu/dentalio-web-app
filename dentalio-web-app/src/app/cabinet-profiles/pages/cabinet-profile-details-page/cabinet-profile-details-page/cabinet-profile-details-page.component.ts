import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { fetchCabinetProfileById } from 'src/app/cabinet-profiles/state/cabinet-profiles.actions';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';
import {
  selectCabinetProfileById,
  selectCabinetProfileByIdStatus,
} from 'src/app/cabinet-profiles/state/cabinet-profiles.selectors';
import { selectFavoriteIds } from 'src/app/favorites/state/favorites.selectors';

@Component({
  selector: 'app-cabinet-profile-details-page',
  templateUrl: './cabinet-profile-details-page.component.html',
  styleUrls: ['./cabinet-profile-details-page.component.scss'],
})
export class CabinetProfileDetailsPageComponent implements OnInit, OnDestroy {
  public selectedCabinetProfile$: Observable<CabinetProfileM> =
    this.store.select(selectCabinetProfileById);
  public status$: Observable<string> = this.store.select(
    selectCabinetProfileByIdStatus
  );
  public favoriteIds$ = this.store.select(selectFavoriteIds);
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const cabinetId = params['cabinetId'];

      // Dispatch the action with the cabinetId
      this.store.dispatch(fetchCabinetProfileById({ cabinetId }));
    });

    this.selectedCabinetProfile$
      .pipe(takeUntil(this.destroy$))
      .subscribe((cabinet) => {
        // Access the selected cabinet data
        console.log('Selected Cabinet Data:', cabinet);
      });
  }

  isFavorite(cabinetId: string): boolean {
    let isFavorite = false;
    this.favoriteIds$
      .pipe(takeUntil(this.destroy$))
      .subscribe((favoriteIds) => {
        isFavorite = favoriteIds.includes(cabinetId);
      });
    return isFavorite;
  }

  ngOnDestroy() {
    // Unsubscribe from Observables to prevent memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }
}
