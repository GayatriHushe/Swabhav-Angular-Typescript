import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBallComponent } from './blue-ball.component';

describe('BlueBallComponent', () => {
  let component: BlueBallComponent;
  let fixture: ComponentFixture<BlueBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
