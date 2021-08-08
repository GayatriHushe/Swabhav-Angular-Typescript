import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersApiComponentComponent } from './numbers-api-component.component';

describe('NumbersApiComponentComponent', () => {
  let component: NumbersApiComponentComponent;
  let fixture: ComponentFixture<NumbersApiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersApiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
