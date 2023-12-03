import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth/auth.module';
import { HomeComponent } from './home.component';
import { SearchMenuComponent } from '../search/search-menu/search-menu.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SearchMenuComponent],
  imports: [CommonModule, AuthModule, SharedModule, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
