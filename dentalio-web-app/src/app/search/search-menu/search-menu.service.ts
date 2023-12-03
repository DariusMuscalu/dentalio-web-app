import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { fetchCabinetProfiles } from 'src/app/cabinet-profiles/state/cabinet-profiles.actions';

@Injectable({
  providedIn: 'root',
})
export class SearchMenuService {
  private selectedServiceSubject = new BehaviorSubject<string | undefined>(
    undefined
  );
  private selectedLocationSubject = new BehaviorSubject<string | undefined>(
    undefined
  );

  selectedService$ = this.selectedServiceSubject.asObservable();
  selectedLocation$ = this.selectedLocationSubject.asObservable();

  constructor(private store: Store<AppState>) {}

  setSelectedService(service: string | undefined): void {
    this.selectedServiceSubject.next(service);
    this.triggerFetchCabinetProfiles();
  }

  setSelectedLocation(location: string | undefined): void {
    this.selectedLocationSubject.next(location);
    this.triggerFetchCabinetProfiles();
  }

  private triggerFetchCabinetProfiles(): void {
    // Dispatch the action when either service or location changes
    const service = this.selectedServiceSubject.value;
    const location = this.selectedLocationSubject.value;
    this.store.dispatch(fetchCabinetProfiles({ service, location }));
  }
}
