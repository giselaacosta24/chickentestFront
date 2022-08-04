import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmChickenComponent } from './farm-chicken.component';

describe('FarmChickenComponent', () => {
  let component: FarmChickenComponent;
  let fixture: ComponentFixture<FarmChickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmChickenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmChickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
