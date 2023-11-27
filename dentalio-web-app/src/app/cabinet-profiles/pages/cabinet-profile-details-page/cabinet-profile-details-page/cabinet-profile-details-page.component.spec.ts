import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetProfileDetailsPageComponent } from './cabinet-profile-details-page.component';

describe('CabinetProfileDetailsPageComponent', () => {
  let component: CabinetProfileDetailsPageComponent;
  let fixture: ComponentFixture<CabinetProfileDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinetProfileDetailsPageComponent]
    });
    fixture = TestBed.createComponent(CabinetProfileDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
