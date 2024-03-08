import { TestBed } from '@angular/core/testing';

import { ConsumerProjectService } from './consumer-project.service';

describe('ConsumerProjectService', () => {
  let service: ConsumerProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
