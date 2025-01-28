import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivelComponent } from './rivel.component';

describe('RivelComponent', () => {
  let component: RivelComponent;
  let fixture: ComponentFixture<RivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
