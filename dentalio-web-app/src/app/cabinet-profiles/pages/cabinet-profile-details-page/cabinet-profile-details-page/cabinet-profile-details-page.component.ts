import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cabinet-profile-details-page',
  templateUrl: './cabinet-profile-details-page.component.html',
  styleUrls: ['./cabinet-profile-details-page.component.scss'],
})
export class CabinetProfileDetailsPageComponent {
  constructor(private store: Store) {}
}
