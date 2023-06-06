import { TestBed } from '@angular/core/testing';

import { WatchSelectedService } from './watch-selected.service';

describe('WatchSelectedService', () => {
  let service: WatchSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
