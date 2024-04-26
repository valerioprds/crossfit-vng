import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesSliderComponent } from './classes-slider.component';

describe('ClassesComponent', () => {
  let component: ClassesSliderComponent;
  let fixture: ComponentFixture<ClassesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
