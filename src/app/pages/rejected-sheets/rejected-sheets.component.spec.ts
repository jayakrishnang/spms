import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedSheetsComponent } from './rejected-sheets.component';

describe('RejectedSheetsComponent', () => {
  let component: RejectedSheetsComponent;
  let fixture: ComponentFixture<RejectedSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
