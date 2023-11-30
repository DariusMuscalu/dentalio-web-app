import { Component } from '@angular/core';
import { NavigationService } from 'src/app/shared/layouts/navigation/navigation.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthMenuVisible$ = this.authService.isVisible$;
  isNavMenuVisible$ = this.navigationService.isVisible$;

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
