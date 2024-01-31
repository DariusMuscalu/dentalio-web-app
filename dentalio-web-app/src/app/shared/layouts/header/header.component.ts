import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatMenu } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild(MatMenu) menu!: MatMenu; // Declare menu property using ViewChild

  isAuthMenuVisible$ = this.authService.isVisible$;

  constructor(private authService: AuthService) {}

  toggleAuthModalVisibility() {
    this.authService.toggleAuthModalVisibility();
  }
}
