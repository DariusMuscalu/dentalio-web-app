import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetProfileDetailsPageComponent } from './cabinet-profile-details-page/cabinet-profile-details-page.component';
import { CabinetProfileDetailsPageRoutingModule } from './cabinet-profile-details-page-routing.module';
import { CabinetProfilesModule } from '../../cabinet-profiles.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [CabinetProfileDetailsPageComponent],
  imports: [
    CommonModule,
    CabinetProfileDetailsPageRoutingModule,
    CabinetProfilesModule,
    SharedModule,
    SlickCarouselModule,
  ],
})
export class CabinetProfileDetailsPageModule {}
