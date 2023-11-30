import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { CabinetProfilesModule } from '../cabinet-profiles/cabinet-profiles.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    CabinetProfilesModule,
    SharedModule,
    HomeModule,
  ],
})
export class FavoritesModule {}
