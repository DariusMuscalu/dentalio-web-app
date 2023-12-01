import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, SharedModule, ProfileRoutingModule, FormsModule],
})
export class ProfileModule {}
