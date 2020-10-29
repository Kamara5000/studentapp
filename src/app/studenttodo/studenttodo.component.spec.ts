import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttodoComponent } from './studenttodo.component';

describe('StudenttodoComponent', () => {
  let component: StudenttodoComponent;
  let fixture: ComponentFixture<StudenttodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
