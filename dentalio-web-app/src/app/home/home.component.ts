import { Component } from '@angular/core';
import { NavigationService } from '../shared/layouts/navigation/navigation.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isVisible$ = this.authService.isVisible$;
  isNavMenuVisible$ = this.navigationService.isVisible$;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}
}
