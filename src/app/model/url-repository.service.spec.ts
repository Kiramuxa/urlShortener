import { TestBed, inject } from '@angular/core/testing';

import { UrlRepositoryService } from './url-repository.service';

describe('UrlRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlRepositoryService]
    });
  });

  it('should ...', inject([UrlRepositoryService], (service: UrlRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
