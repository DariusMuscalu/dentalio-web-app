import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from '../pages/edit-profile-page/edit-profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [ProfilePageComponent, EditProfilePageComponent],
  imports: [CommonModule, SharedModule, ProfileRoutingModule],
})
export class ProfileModule {}
