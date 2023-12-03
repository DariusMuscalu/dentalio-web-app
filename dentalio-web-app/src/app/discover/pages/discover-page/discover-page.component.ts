import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { fetchCabinetProfiles } from 'src/app/cabinet-profiles/state/cabinet-profiles.actions';
import {
  selectAllCabinetProfiles,
  selectCabinetProfilesStatus,
} from 'src/app/cabinet-profiles/state/cabinet-profiles.selectors';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss'],
})
export class DiscoverPageComponent {
  public cabinetProfiles$ = this.store.select(selectAllCabinetProfiles);
  public cabinetProfilesStatus$ = this.store.select(
    selectCabinetProfilesStatus
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.cabinetProfilesStatus$
      .pipe(
        filter((status) => status === <const>'pending'),
        take(1)
      )
      .subscribe(() => {
        // Fetch all cabinets if the status is pending. Meaning that the user didn't used the search menu
        // but used the route to navigate directly to /discover.
        this.store.dispatch(fetchCabinetProfiles({}));
      });
  }
}
