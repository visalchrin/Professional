import { ComponentFixture, TestBed } from '@angular/core/testing';

import { trendyComponent } from './trendy.component';

describe('trendyComponent', () => {
  let component: trendyComponent;
  let fixture: ComponentFixture<trendyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ trendyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(trendyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
