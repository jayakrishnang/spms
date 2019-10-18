import { TestBed } from '@angular/core/testing';

import { PendingApprovalsShowService } from './pending-approvals-show.service';

describe('PendingApprovalsShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingApprovalsShowService = TestBed.get(PendingApprovalsShowService);
    expect(service).toBeTruthy();
  });
});
