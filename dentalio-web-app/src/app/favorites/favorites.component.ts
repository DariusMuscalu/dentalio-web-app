import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  selectAllFavoriteCabinetProfiles,
  selectFavoriteCabinetProfilesStatus,
} from './state/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  public favoriteCabinetProfiles$ = this.store.select(
    selectAllFavoriteCabinetProfiles
  );

  public favoritesStatus$ = this.store.select(
    selectFavoriteCabinetProfilesStatus
  );

  constructor(private store: Store<AppState>) {}
}
