import { TestBed } from '@angular/core/testing';

import { FreeFeatApiService } from './free-feat-api.service';

describe('FreeFeatApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeFeatApiService = TestBed.get(FreeFeatApiService);
    expect(service).toBeTruthy();
  });
});
