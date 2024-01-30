import { Component, Input } from '@angular/core';
import { CabinetProfileM } from '../../models/cabinet-profile.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectFavoriteIds } from 'src/app/favorites/state/favorites.selectors';
import {
  addFavorite,
  removeFavorite,
} from 'src/app/favorites/state/favorites.actions';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() cabinetProfile: CabinetProfileM | undefined;
  public favoriteIds$ = this.store.select(selectFavoriteIds);

  constructor(private router: Router, private store: Store<AppState>) {}

  onProfileCardClick(cabinetId: string) {
    this.router.navigate(['/cabinet-profile-details', cabinetId]);
  }

  onFavoriteBtnClick(event: Event, profileId: string) {
    event.stopPropagation(); // Stop the propagation of the click event, so that the onProfileCardClick() does not get triggered.
    this.isFavorite(profileId)
      ? this.store.dispatch(removeFavorite({ profileId }))
      : this.store.dispatch(addFavorite({ profileId }));
  }

  isFavorite(cabinetId: string): boolean {
    let isFavorite = false;
    this.favoriteIds$.subscribe((favoriteIds) => {
      isFavorite = favoriteIds.includes(cabinetId);
    });
    return isFavorite;
  }
}
