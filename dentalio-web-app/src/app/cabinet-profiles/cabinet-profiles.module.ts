import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';

@NgModule({
  declarations: [ProfileCardComponent],
  imports: [CommonModule],
  exports: [ProfileCardComponent]
})
export class CabinetProfilesModule {}
