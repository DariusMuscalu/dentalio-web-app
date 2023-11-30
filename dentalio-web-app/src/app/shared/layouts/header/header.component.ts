import { Component } from '@angular/core';
import { NavigationService } from '../../../navigation/navigation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
  ) {}

  toggleAuthModalVisibility() {
    this.authService.toggleAuthModalVisibility();
  }

  toggleNavMenuVisibility() {
    this.navigationService.toggleNavMenuVisibility();
  }
}
