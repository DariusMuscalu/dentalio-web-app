import { Component } from '@angular/core';
import { CabinetProfilesService } from 'src/app/cabinet-profiles/cabinet-profiles.service';
import { CabinetProfileM } from 'src/app/cabinet-profiles/models/cabinet-profile.model';

@Component({
  selector: 'app-cabinet-profile-details-page',
  templateUrl: './cabinet-profile-details-page.component.html',
  styleUrls: ['./cabinet-profile-details-page.component.scss'],
})
export class CabinetProfileDetailsPageComponent {
  // selectedCabinetProfile: CabinetProfileM | undefined;

  constructor(public cabinetProfilesService: CabinetProfilesService) {}

  // ngOnInit(): void {
  //   console.log('cccccccc');
  //   this.cabinetProfilesService.selectedCabinetProfile$.subscribe(
  //     (profile: CabinetProfileM | undefined) => {
  //       console.log('xxxxxxxxxxxxxxx', profile);
  //       this.selectedCabinetProfile = profile;
  //       console.log('Selected Cabinet Profile:', this.selectedCabinetProfile);
  //     }
  //   );
  // }
}
