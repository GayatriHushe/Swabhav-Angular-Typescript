import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindComponent } from './twowaybind.component';

describe('TwowaybindComponent', () => {
  let component: TwowaybindComponent;
  let fixture: ComponentFixture<TwowaybindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
