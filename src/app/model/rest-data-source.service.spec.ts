import { TestBed, inject } from '@angular/core/testing';

import { RestDataSourceService } from './rest-data-source.service';

describe('RestDataSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestDataSourceService]
    });
  });

  it('should ...', inject([RestDataSourceService], (service: RestDataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
