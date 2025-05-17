import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDishes } from './special-dishes';

describe('SpecialDishes', () => {
  let component: SpecialDishes;
  let fixture: ComponentFixture<SpecialDishes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialDishes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDishes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
