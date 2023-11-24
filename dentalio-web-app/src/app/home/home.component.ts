import { Component, HostListener, ElementRef } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  isVisible$ = this.authService.isVisible$;
  isNavMenuVisible$ = this.navigationService.isVisible$;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private elementRef: ElementRef
  ) {}

  // TODO I think I should move this code from the app component, but idk where exactly. 
  // I think that it should be added in the main page after creating it.
  // This code is responsible for hiding the nav menu when there is a tap outside of it, when it is being displayed. But for the moment the if inside it is never executed. I need to understand exactly how the API works.
  // Gpt gave me this code approach.
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Check if the click is outside the menu and the button
    if (!this.elementRef.nativeElement.contains(target)) {
      this.navigationService.toggleNavMenuVisibility;
    }
  }
}
