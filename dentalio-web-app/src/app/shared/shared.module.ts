import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './layouts/favorite-button/favorite-button.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { AuthModule } from '../auth/auth.module';
@NgModule({
  declarations: [
    FavoriteButtonComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, AuthModule],
  exports: [
    FavoriteButtonComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
})
export class SharedModule {}
