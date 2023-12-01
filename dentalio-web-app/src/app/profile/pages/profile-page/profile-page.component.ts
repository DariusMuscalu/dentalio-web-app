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

  constructor(private store: Store<AppState>, private toast: NgToastService) {}

  ngOnInit(): void {
    this.store.dispatch(fetchUserData());

    // Subscribe to userData$ and update user when data is available
    this.userData$.subscribe((userData) => {
      if (userData) {
        this.user = { ...userData }; // Use spread operator to avoid modifying the original object
      }
    });

    // Subscribe to isSuccess$ to show a success toast when the user data is updated
    this.isSuccess$.subscribe((isSuccess) => {
      if (isSuccess) {
        this.toast.success({
          detail: 'Modificarile au fost salvate!',
          summary: 'Success',
          duration: 2000,
          position: 'bottomRight',
        });
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
    this.store.dispatch(updateUserData({ newUserData: this.user }));
  }
}
