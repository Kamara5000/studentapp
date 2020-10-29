import { TestBed } from '@angular/core/testing';

import { StudenttodoService } from './studenttodo.service';

describe('StudenttodoService', () => {
  let service: StudenttodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenttodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
