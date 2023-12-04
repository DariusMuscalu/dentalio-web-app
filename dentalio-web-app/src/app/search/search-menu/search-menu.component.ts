import { Component } from '@angular/core';
import { SearchMenuService } from './search-menu.service';
import { Router } from '@angular/router';
import { locations } from '../const/locations.const';
import { services } from '../const/services.const';
@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss'],
})
export class SearchMenuComponent {
  selectedLocation: string = '';
  selectedService: string = '';
  selectedAnytime: string = '';
  locations = locations;
  services = services;
  keyword = 'name';

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

  onLocationSelected(selectedOption: any): void {
    // Assuming selectedOption is an object with a 'name' property
    this.selectedLocation = selectedOption ? selectedOption.name : '';
  }

  onServiceSelected(selectedOption: any): void {
    // Assuming selectedOption is an object with a 'name' property
    this.selectedService = selectedOption ? selectedOption.name : '';
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
