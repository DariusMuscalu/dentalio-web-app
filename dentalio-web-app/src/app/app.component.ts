import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { fetchFavorites } from './favorites/state/favorites.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dentalio-web-app';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(fetchFavorites());
  }
}
