/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeparmentService } from './Deparment.service';

describe('Service: Deparment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeparmentService]
    });
  });

  it('should ...', inject([DeparmentService], (service: DeparmentService) => {
    expect(service).toBeTruthy();
  }));
});
