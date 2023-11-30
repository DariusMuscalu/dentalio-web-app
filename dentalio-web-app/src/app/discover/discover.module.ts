import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CabinetProfilesModule } from '../cabinet-profiles/cabinet-profiles.module';

import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
@NgModule({
  declarations: [DiscoverPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DiscoverRoutingModule,
    CabinetProfilesModule,
  ],
})
export class DiscoverModule {}
