import { TestBed } from '@angular/core/testing';

import { BusinesstypesService } from './businesstypes.service';

describe('BusinesstypesService', () => {
  let service: BusinesstypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinesstypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
