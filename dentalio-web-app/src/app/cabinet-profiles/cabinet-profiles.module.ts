import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';
import { CabinetProfilesService } from './cabinet-profiles.service';

@NgModule({
  declarations: [ProfileCardComponent],
  imports: [CommonModule],
  exports: [ProfileCardComponent],
  providers: [CabinetProfilesService],
})
export class CabinetProfilesModule {}
