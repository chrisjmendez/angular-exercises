import { Injectable } from '@angular/core';

import { Hero } from '../classes/hero';
import { HEROES } from '../data/mock-heroes';

@Injectable()
export class HeroService {	
	getData(): Promise<Hero[]> {
		//Use Promise to get mock data, then return an array of mock data.
		return Promise.resolve(HEROES);
	}
	
	getDataSlowly(): Promise<Hero[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(this.getData()), 2000);
	  });
	}
}
