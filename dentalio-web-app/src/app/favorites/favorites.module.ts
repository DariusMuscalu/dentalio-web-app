import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { CabinetProfilesModule } from '../cabinet-profiles/cabinet-profiles.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule, CabinetProfilesModule],
})
export class FavoritesModule {}
