import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { HomeModule } from './home/home.module';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cabinetProfilesReducer } from './cabinet-profiles/state/cabinet-profiles.reducer';
import { CabinetProfilesEffects } from './cabinet-profiles/state/cabinet-profiles.effects';
import { FavoritesEffects } from './favorites/state/favorites.effects';
import { favoritesReducer } from './favorites/state/favorites.reducer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileEffects } from './profile/state/profile.effects';
import { profileReducer } from './profile/state/profile.reducer';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgToastModule,
    StoreModule.forRoot({
      cabinetProfiles: cabinetProfilesReducer,
      favoriteCabinetProfiles: favoritesReducer,
      profile: profileReducer,
    }),
    EffectsModule.forRoot([
      CabinetProfilesEffects,
      FavoritesEffects,
      ProfileEffects,
    ]),
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
