import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './layouts/favorite-button/favorite-button.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from '../footer/footer/footer.component';

@NgModule({
  declarations: [FavoriteButtonComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [FavoriteButtonComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
