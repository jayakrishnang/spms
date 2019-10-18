import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalsShowComponent } from './pending-approvals-show.component';

describe('PendingApprovalsShowComponent', () => {
  let component: PendingApprovalsShowComponent;
  let fixture: ComponentFixture<PendingApprovalsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingApprovalsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApprovalsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
