import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'edit', component: EditProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
