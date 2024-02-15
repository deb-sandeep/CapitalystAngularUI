import { TestBed } from '@angular/core/testing';

import { LibAssetsService } from './lib-assets.service';

describe('LibAssetsService', () => {
  let service: LibAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
