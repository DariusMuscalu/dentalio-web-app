import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from '../pages/edit-profile-page/edit-profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent, EditProfilePageComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
