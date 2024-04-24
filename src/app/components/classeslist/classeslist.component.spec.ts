import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseslistComponent } from './classeslist.component';

describe('ClasseslistComponent', () => {
  let component: ClasseslistComponent;
  let fixture: ComponentFixture<ClasseslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
