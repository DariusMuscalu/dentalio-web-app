import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
    // Add any child routes if needed
    children: [
      // Example child route
      // { path: 'child-route', component: ChildComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
