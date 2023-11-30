import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetProfileDetailsPageComponent } from './cabinet-profile-details-page/cabinet-profile-details-page.component';
import { CabinetProfileDetailsPageRoutingModule } from './cabinet-profile-details-page-routing.module';
import { CabinetProfilesModule } from '../../cabinet-profiles.module';
import { HomeModule } from 'src/app/home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [CabinetProfileDetailsPageComponent],
  imports: [
    CommonModule,
    CabinetProfileDetailsPageRoutingModule,
    CabinetProfilesModule,
    HomeModule,
    SharedModule,
  ],
})
export class CabinetProfileDetailsPageModule {}
