import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { NotificationsCardComponent } from './layouts/notifications-card/notifications-card.component';

@NgModule({
  declarations: [NotificationsComponent, NotificationsCardComponent],
  imports: [CommonModule, NotificationsRoutingModule, SharedModule],
})
export class NotificationsModule {}
