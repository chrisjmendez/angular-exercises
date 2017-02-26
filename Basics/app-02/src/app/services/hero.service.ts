import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

//Allows us to extend Observable with extra capabilities
import 'rxjs/add/operator/toPromise';

import { Hero } from '../classes/hero';

@Injectable()
export class HeroService {	

	private headers = new Headers({'Content-Type': 'application/json'});

	private heroURL = 'http://localhost:8080/hero'
	private heroesURL = 'http://localhost:8080/heroes'
	
    constructor(private http: Http) { }	

	//Fetch a SINGLE Hero
	getHero(id: number): Promise<Hero> {
	//	return this. getHeros().then(heroes => heroes.find(hero => hero.id === id));
		const url = `${this.heroURL}/${id}`;
		return this.http
			.get(url)
			.toPromise()
			.then(response => response.json() as Hero)
			.catch(this.onError);
	}
	
	//Fetch an ARRAY of Heros
	//http://learnangular2.com/es6/promises
	 getHeros(): Promise<Hero[]> {
		const url = `${this.heroesURL}`;
		return this.http
			.get(url)
			//A. Convert Observable to a Promise using this method
			.toPromise()
			//B. Get the JSON data from the API and cast it
			.then((response) => {
				return response.json() as Hero[];
			})
			//C. Return the actual JSON data
			.then((data) => {
				//console.log("!", data[0])
				return data
			})
			//D. Catch any errors
			.catch(this.onError);
	}
	
	//Fetch an array of items with a simulated delay
	getDataSlowly(): Promise<Hero[]> {
	  return new Promise(resolve => {
	    setTimeout(() => resolve(this. getHeros()), 250);
	  });
	}
	
	update(hero:Hero): Promise<Hero> {
		const url = `${this.heroURL}/${hero.id}`;
		var data = JSON.stringify(hero)
		//console.log(data);
		return this.http
			.put(url, data, {headers: this.headers})
			.toPromise()
			.then(() => hero)
			.catch(this.onError);
	}
	
	//TODO: Make this better
	private onError(error:any): Promise<any> {
		console.error("An error occured", error);
		return Promise.reject(error.message || error);
	}
}
