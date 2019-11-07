import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedSheetsComponent } from './approved-sheets.component';

describe('ApprovedSheetsComponent', () => {
  let component: ApprovedSheetsComponent;
  let fixture: ComponentFixture<ApprovedSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
