import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './layouts/favorite-button/favorite-button.component';

@NgModule({
  declarations: [FavoriteButtonComponent],
  imports: [CommonModule],
  exports: [FavoriteButtonComponent],
})
export class SharedModule {}
