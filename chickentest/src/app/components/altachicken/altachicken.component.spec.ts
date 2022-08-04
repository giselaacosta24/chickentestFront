import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltachickenComponent } from './altachicken.component';

describe('AltachickenComponent', () => {
  let component: AltachickenComponent;
  let fixture: ComponentFixture<AltachickenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltachickenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltachickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
