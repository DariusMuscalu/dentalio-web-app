import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { fetchFavorites } from './state/favorites.actions';
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

  ngOnInit() {
    // Dispatch the action to fetch favorites
    this.store.dispatch(fetchFavorites());

    // Subscribe to favoriteCabinetProfiles$ to log changes
    this.favoriteCabinetProfiles$.subscribe((favorites) => {
      console.log('Favorite Cabinet Profiles:', favorites);
    });

    // Subscribe to favoritesStatus$ to log status changes
    this.favoritesStatus$.subscribe((status) => {
      console.log('Favorites Status:', status);
    });
  }
}
