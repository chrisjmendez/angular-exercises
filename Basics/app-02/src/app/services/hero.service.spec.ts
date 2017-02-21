/* tslint:disable:no-unused-variable */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../classes/hero';


import { TestBed, async, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
