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
    const currentState = this.isVisibleSubject.value;
    console.log(`Current State: ${currentState}`);
    this.isVisibleSubject.next(!currentState);
  }
}
