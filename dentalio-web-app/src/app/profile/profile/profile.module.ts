import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from '../pages/edit-profile-page/edit-profile-page.component';
import { HomeModule } from 'src/app/home/home.module';

@NgModule({
  declarations: [ProfilePageComponent, EditProfilePageComponent],
  imports: [CommonModule, HomeModule, ProfileRoutingModule],
})
export class ProfileModule {}
