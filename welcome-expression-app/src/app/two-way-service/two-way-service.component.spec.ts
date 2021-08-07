import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayServiceComponent } from './two-way-service.component';

describe('TwoWayServiceComponent', () => {
  let component: TwoWayServiceComponent;
  let fixture: ComponentFixture<TwoWayServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
