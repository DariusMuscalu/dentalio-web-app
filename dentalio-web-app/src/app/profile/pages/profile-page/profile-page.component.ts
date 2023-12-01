import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserM } from 'src/app/shared/services/user.model';
import { fetchUserData, updateUserData } from '../../state/profile.actions';
import {
  selectUser,
  selectError,
  selectIsFetchPending,
  selectIsUpdateSuccess,
} from '../../state/profile.selectors';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  userData$ = this.store.select(selectUser);
  error$ = this.store.select(selectError);
  isFetchPending$ = this.store.select(selectIsFetchPending);
  isSuccess$ = this.store.select(selectIsUpdateSuccess);

  // Used to update user data. It is being set from input fields in the template.
  user: UserM = {};

  // Variable to track whether the update has been triggered. This is needed in order to avoid displaying the toast when visiting the page after an update. Without this flag, the toast will be displayed when visiting the profile page after, if there was any updates previously in the user data. In order to show the toast only on updates of the user data, we need it.
  updateTriggered = false;

  constructor(private store: Store<AppState>, private toast: NgToastService) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUserData());

    // Subscribe to userData$ and update user when data is available.
    // user is set initially to the fetched data in order to display it in the placeholders.
    this.userData$.subscribe((userData) => {
      if (userData) {
        this.user = { ...userData }; // Use spread operator to avoid modifying the original object
      }
    });

    // Subscribe to isSuccess$ to show a success toast when the user data is updated
    this.isSuccess$.subscribe((isSuccess) => {
      // Check if isSuccess is true and the update has been triggered
      if (isSuccess && this.updateTriggered) {
        this.toast.success({
          detail: 'Modificarile au fost salvate!',
          summary: 'Success',
          duration: 4000,
          position: 'bottomRight',
        });

        // Reset the updateTriggered flag
        this.updateTriggered = false;
      }
    });

    // Subscribe to error$ to show an error toast when there's an error
    this.error$.subscribe((error) => {
      if (error) {
        this.toast.error({
          detail: `Error: ${error}`,
          summary: 'Error',
          sticky: true,
          position: 'bottomRight',
        });
      }
    });
  }

  onSaveChanges() {
    // Set the updateTriggered flag before dispatching the update action
    this.updateTriggered = true;
    this.store.dispatch(updateUserData({ newUserData: this.user }));
  }
}
