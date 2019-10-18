import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsShowComponent } from './sheets-show.component';

describe('SheetsShowComponent', () => {
  let component: SheetsShowComponent;
  let fixture: ComponentFixture<SheetsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
