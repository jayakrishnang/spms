import { TestBed } from '@angular/core/testing';

import { RejectedSheetsService } from './rejected-sheets.service';

describe('RejectedSheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RejectedSheetsService = TestBed.get(RejectedSheetsService);
    expect(service).toBeTruthy();
  });
});
