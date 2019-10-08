import { TestBed } from '@angular/core/testing';

import { ReviewratingsService } from './reviewratings.service';

describe('ReviewratingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewratingsService = TestBed.get(ReviewratingsService);
    expect(service).toBeTruthy();
  });
});
