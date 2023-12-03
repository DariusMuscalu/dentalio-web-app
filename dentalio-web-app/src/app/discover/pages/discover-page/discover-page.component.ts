import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { fetchCabinetProfiles } from 'src/app/cabinet-profiles/state/cabinet-profiles.actions';
import { selectAllCabinetProfiles } from 'src/app/cabinet-profiles/state/cabinet-profiles.selectors';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss'],
})
export class DiscoverPageComponent {
  public cabinetProfiles$ = this.store.select(selectAllCabinetProfiles);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(fetchCabinetProfiles({ service: 'Detartraj', location: 'Bucuresti' }));
  }
}
