import { TestBed } from '@angular/core/testing';

import { GedungService } from './gedung.service';

describe('GedungService', () => {
  let service: GedungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GedungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
