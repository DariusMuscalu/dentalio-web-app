import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  isSignIn: boolean = true;

  constructor(private authService: AuthService) {}

  toggleAuthModalVisibility() {
    this.authService.toggleAuthModalVisibility();
  }
}
