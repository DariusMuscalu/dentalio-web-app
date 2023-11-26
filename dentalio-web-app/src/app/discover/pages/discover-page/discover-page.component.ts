import { Component } from '@angular/core';
import { CabinetProfilesService } from 'src/app/cabinet-profiles/cabinet-profiles.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss'],
})
export class DiscoverPageComponent {
  constructor(public cabinetProfilesService: CabinetProfilesService) {}
}
