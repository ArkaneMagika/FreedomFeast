import { TestBed } from '@angular/core/testing';

import { ActivatedService } from './activated.service';

describe('ActivatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivatedService = TestBed.get(ActivatedService);
    expect(service).toBeTruthy();
  });
});
