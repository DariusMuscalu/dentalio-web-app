import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile/profile.module').then((m) => m.ProfileModule),
  },
  // TODO Add wildcard route and pagenotfound component, see where you need to create it.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
