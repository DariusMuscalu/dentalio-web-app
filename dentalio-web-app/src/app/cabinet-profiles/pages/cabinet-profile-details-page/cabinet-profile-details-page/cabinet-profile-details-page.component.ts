import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/state/app.state';
import {
  selectCabinetProfileById,
  selectCabinetProfileByIdStatus,
} from 'src/app/state/cabinet-profiles/cabinet-profiles.selectors';
import { fetchCabinetProfileById } from 'src/app/state/cabinet-profiles/cabinet-profiles.actions';

@Component({
  selector: 'app-cabinet-profile-details-page',
  templateUrl: './cabinet-profile-details-page.component.html',
  styleUrls: ['./cabinet-profile-details-page.component.scss'],
})
export class CabinetProfileDetailsPageComponent implements OnInit {
  public selectedCabinetProfile$ = this.store.select(selectCabinetProfileById);
  public status$ = this.store.select(selectCabinetProfileByIdStatus);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const cabinetId = params['cabinetId'];

      // Dispatch the action with the cabinetId
      this.store.dispatch(fetchCabinetProfileById({ cabinetId }));
    });

    this.status$.subscribe((status) => {
      // DEBUGGING PURPOSES
      // You can perform actions based on the status here
      if (status === 'loading') {
        // Do something when loading
      } else if (status === 'success') {
        // Access the selected cabinet data when the status is 'success'
        this.selectedCabinetProfile$.subscribe((cabinet) => {
          console.log('Selected Cabinet Data:', cabinet);
        });
        // Do something when successful
      } else if (status === 'error') {
        // Do something when there's an error
      }
    });
  }
}
