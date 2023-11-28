import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchCabinetProfiles } from 'src/app/state/cabinet-profiles/cabinet-profiles.actions';
import { selectAllCabinetProfiles } from 'src/app/state/cabinet-profiles/cabinet-profiles.selectors';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss'],
})
export class DiscoverPageComponent {
  public cabinetProfiles$ = this.store.select(selectAllCabinetProfiles);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchCabinetProfiles());
  }
}
