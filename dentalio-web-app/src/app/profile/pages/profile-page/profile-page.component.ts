import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserM } from 'src/app/shared/services/user.model';
import { fetchUserData, updateUserData } from '../../state/profile.actions';
import {
  selectUser,
  selectError,
  selectIsPending,
  selectIsSuccess,
} from '../../state/profile.selectors';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  userData$ = this.store.select(selectUser);
  error$ = this.store.select(selectError);
  isPending$ = this.store.select(selectIsPending);
  isSuccess$ = this.store.select(selectIsSuccess);

  // Used to update user data. It is being set from input fields in the template.
  user: UserM = {};

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUserData());

    // Subscribe to userData$ and update user when data is available
    this.userData$.subscribe((userData) => {
      if (userData) {
        this.user = { ...userData }; // Use spread operator to avoid modifying the original object
      }
    });
  }

  onSaveChanges() {
    this.store.dispatch(updateUserData({ newUserData: this.user }));
  }

  // DEBUGGING PURPOSES: Add this method to log user data and status
  logUserDataAndStatus(): void {
    // Log user data
    this.userData$.subscribe((userData) => {
      console.log('User data:', userData);
    });

    // Log status
    this.isPending$.subscribe((isPending) => {
      console.log('Is Pending:', isPending);
    });

    this.isSuccess$.subscribe((isSuccess) => {
      console.log('Is Success:', isSuccess);
    });

    this.error$.subscribe((error) => {
      console.log('Error:', error);
    });
  }
}
