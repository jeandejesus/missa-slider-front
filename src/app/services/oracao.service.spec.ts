import { TestBed } from '@angular/core/testing';

import { OracaoService } from './oracao.service';

describe('OracaoService', () => {
  let service: OracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
