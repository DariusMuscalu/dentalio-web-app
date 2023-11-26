import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverPageComponent } from './discover-page.component';

describe('DiscoverPageComponent', () => {
  let component: DiscoverPageComponent;
  let fixture: ComponentFixture<DiscoverPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverPageComponent]
    });
    fixture = TestBed.createComponent(DiscoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
