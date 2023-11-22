import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { EditProfilePageComponent } from './profile/edit-profile-page/edit-profile-page.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, ProfilePageComponent, EditProfilePageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
