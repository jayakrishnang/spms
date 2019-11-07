import { TestBed } from '@angular/core/testing';

import { ApprovedSheetsService } from './approved-sheets.service';

describe('ApprovedSheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovedSheetsService = TestBed.get(ApprovedSheetsService);
    expect(service).toBeTruthy();
  });
});
