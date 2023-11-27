import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetProfileDetailsPageComponent } from './cabinet-profile-details-page/cabinet-profile-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetProfileDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabinetProfileDetailsPageRoutingModule {}
