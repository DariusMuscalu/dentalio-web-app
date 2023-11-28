import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {
  fetchCabinetProfileById,
  fetchCabinetProfiles,
} from 'src/app/state/cabinet-profiles/cabinet-profiles.actions';
import { selectAllCabinetProfiles } from 'src/app/state/cabinet-profiles/cabinet-profiles.selectors';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss'],
})
export class DiscoverPageComponent {
  public cabinetProfiles$ = this.store.select(selectAllCabinetProfiles);

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(fetchCabinetProfiles());
  }

  onProfileCardClick(cabinetId: string) {
    this.router.navigate(['/cabinet-profile-details', cabinetId]);
  }
}
