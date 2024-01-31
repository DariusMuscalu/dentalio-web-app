import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrls: ['./auth-options.component.scss'],
})
export class AuthOptionsComponent {
  constructor(public authService: AuthService) {}

  signWithGoogle() {
    this.authService.GoogleAuth();
  }

  toggleAuthModalVisibility() {
    this.authService.toggleAuthModalVisibility();
  }
}
