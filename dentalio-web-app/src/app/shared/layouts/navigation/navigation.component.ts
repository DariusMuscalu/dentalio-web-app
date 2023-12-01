import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isNavMenuDisplayed: boolean = false;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) {}

  toggleNavMenuVisibility() {
    this.navigationService.toggleNavMenuVisibility();
  }

  signOut() {
    this.authService.SignOut();
  }
}
