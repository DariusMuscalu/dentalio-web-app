import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  constructor() {}

  toggleNavMenuVisibility() {
    this.isVisibleSubject.next(!this.isVisibleSubject.value);
  }
}
