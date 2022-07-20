import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggFormComponent } from './egg-form.component';

describe('EggFormComponent', () => {
  let component: EggFormComponent;
  let fixture: ComponentFixture<EggFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EggFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
