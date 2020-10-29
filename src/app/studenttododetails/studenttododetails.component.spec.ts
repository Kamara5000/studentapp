import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttododetailsComponent } from './studenttododetails.component';

describe('StudenttododetailsComponent', () => {
  let component: StudenttododetailsComponent;
  let fixture: ComponentFixture<StudenttododetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttododetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttododetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
