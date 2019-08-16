import { TestBed } from '@angular/core/testing';

import { DancersService } from './dancers.service';

describe('DancersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DancersService = TestBed.get(DancersService);
    expect(service).toBeTruthy();
  });
});
