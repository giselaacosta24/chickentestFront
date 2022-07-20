import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenFormComponent } from './chicken-form.component';

describe('ChickenFormComponent', () => {
  let component: ChickenFormComponent;
  let fixture: ComponentFixture<ChickenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
