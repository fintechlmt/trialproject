import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinhomeComponent } from './loggedinhome.component';

describe('LoggedinhomeComponent', () => {
  let component: LoggedinhomeComponent;
  let fixture: ComponentFixture<LoggedinhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
