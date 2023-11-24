import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { SearchMenuComponent } from '../search/search-menu/search-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchMenuComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, FooterComponent, HeaderComponent],
})
export class HomeModule {}
