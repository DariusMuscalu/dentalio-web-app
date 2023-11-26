import { TestBed } from '@angular/core/testing';

import { CabinetProfilesService } from './cabinet-profiles.service';

describe('CabinetProfilesService', () => {
  let service: CabinetProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinetProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
