import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isNavMenuDisplayed: boolean = false;

  constructor(private navigationService: NavigationService) {}

  toggleNavMenuVisibility() {
    this.navigationService.toggleNavMenuVisibility();
  }
}
