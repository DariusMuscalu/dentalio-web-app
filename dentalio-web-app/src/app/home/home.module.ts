import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { SearchMenuComponent } from '../search/search-menu/search-menu.component';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchMenuComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, AuthModule],
  exports: [HomeComponent, FooterComponent, HeaderComponent],
})
export class HomeModule {}
