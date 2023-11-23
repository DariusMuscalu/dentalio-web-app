import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  toggleAuthModalVisibility() {
    this.authService.toggleAuthModalVisibility();
  }

  toggleNavMenuVisibility() {
    this.navigationService.toggleNavMenuVisibility();
  }
}
