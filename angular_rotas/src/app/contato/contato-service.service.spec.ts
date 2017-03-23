/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContatoServiceService } from './contato-service.service.ts';

describe('ContatoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoServiceService]
    });
  });

  it('should ...', inject([ContatoServiceService], (service: ContatoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
