import { TestBed } from '@angular/core/testing';

import { SearchMenuService } from './search-menu.service';

describe('SearchMenuService', () => {
  let service: SearchMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
