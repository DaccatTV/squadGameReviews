import { TestBed } from '@angular/core/testing';

import { ConsolesService } from './consoles.service';

describe('ConsolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsolesService = TestBed.get(ConsolesService);
    expect(service).toBeTruthy();
  });
});
