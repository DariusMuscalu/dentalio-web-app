import { Component } from '@angular/core';
import { SearchMenuService } from './search-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss'],
})
export class SearchMenuComponent {
  selectedLocation: string = '';
  selectedService: string = '';
  selectedAnytime: string = '';

  constructor(
    private searchMenuService: SearchMenuService,
    private router: Router
  ) {}

  onDiscoverClick(): void {
    // Trigger actions based on selectedLocation, selectedService, and selectedAnytime
    this.searchMenuService.setSelectedLocation(this.selectedLocation);
    this.searchMenuService.setSelectedService(this.selectedService);
    // You can also handle selectedAnytime if needed

    // Add any additional logic you need for the discover button click
    // For example, you can navigate to a different route.
    this.router.navigate(['/discover']);
  }
}
