import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentCardComponent } from './layouts/appointment-card/appointment-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppointmentsComponent, AppointmentCardComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    SharedModule,
    RouterModule,
  ],
})
export class AppointmentsModule {}
