import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecarousalComponent } from './homecarousal.component';

describe('HomecarousalComponent', () => {
  let component: HomecarousalComponent;
  let fixture: ComponentFixture<HomecarousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecarousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
