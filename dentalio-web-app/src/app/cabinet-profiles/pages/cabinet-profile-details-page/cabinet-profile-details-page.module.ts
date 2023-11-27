import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetProfileDetailsPageComponent } from './cabinet-profile-details-page/cabinet-profile-details-page.component';
import { CabinetProfileDetailsPageRoutingModule } from './cabinet-profile-details-page-routing.module';
import { CabinetProfilesModule } from '../../cabinet-profiles.module';

@NgModule({
  declarations: [CabinetProfileDetailsPageComponent],
  imports: [
    CommonModule,
    CabinetProfileDetailsPageRoutingModule,
    CabinetProfilesModule,
  ],
})
export class CabinetProfileDetailsPageModule {}
