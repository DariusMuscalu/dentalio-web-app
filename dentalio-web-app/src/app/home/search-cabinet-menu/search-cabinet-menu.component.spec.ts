import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCabinetMenuComponent } from './search-cabinet-menu.component';

describe('SearchCabinetMenuComponent', () => {
  let component: SearchCabinetMenuComponent;
  let fixture: ComponentFixture<SearchCabinetMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCabinetMenuComponent]
    });
    fixture = TestBed.createComponent(SearchCabinetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
