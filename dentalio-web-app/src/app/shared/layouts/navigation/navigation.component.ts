import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isNavMenuDisplayed: boolean = false;

  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.SignOut();
  }
}
