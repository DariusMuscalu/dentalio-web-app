import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { AppComponent } from './app.component';
import { EditProfilePageComponent } from './profile/edit-profile-page/edit-profile-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '/profile', component: ProfilePageComponent },
  { path: '/edit-profile', component: EditProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
