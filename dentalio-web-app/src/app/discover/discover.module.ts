import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module';
import { HomeModule } from '../home/home.module';
import { CabinetProfilesModule } from '../cabinet-profiles/cabinet-profiles.module';

import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
@NgModule({
  declarations: [DiscoverPageComponent],
  imports: [
    CommonModule,
    HomeModule,
    DiscoverRoutingModule,
    CabinetProfilesModule,
  ],
})
export class DiscoverModule {}
