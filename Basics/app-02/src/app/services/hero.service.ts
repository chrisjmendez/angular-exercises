import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../classes/hero';

@Injectable()
export class HeroService {	

	private url = 'http://localhost:8080/heroes'
	
    constructor(private http: Http) { }	
	
	getHero(id: number): Promise<Hero> {
		return this.getData().then(heroes => heroes.find(hero => hero.id === id));
	}
	
	//Old Method
	// getData(): Promise<Hero[]> {
	// 	//Use Promise to get mock data, then return an array of mock data.
	// 	return Promise.resolve(HEROES);
	// }
	
	//New Method 
	// http://learnangular2.com/es6/promises
	getData(): Promise<Hero[]> {
		return this.http.get(this.url)
		.toPromise()
		.then((response) => {
			return response.json() as Hero[];
		})
		.then((data) => {
			//console.log("!", data[0])
			return data
		})
		.catch(this.onError);
	}
	
	getDataSlowly(): Promise<Hero[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(this.getData()), 500);
	  });
	}
	
	private onError(error:any): Promise<any> {
		console.error("An error occured", error);
		return Promise.reject(error.message || error);
	}
}
