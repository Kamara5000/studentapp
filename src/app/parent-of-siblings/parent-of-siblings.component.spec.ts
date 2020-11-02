import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfSiblingsComponent } from './parent-of-siblings.component';

describe('ParentOfSiblingsComponent', () => {
  let component: ParentOfSiblingsComponent;
  let fixture: ComponentFixture<ParentOfSiblingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOfSiblingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOfSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
