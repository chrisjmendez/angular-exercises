/*
Description:

Promises are very useful but they're not great in situations where
a user makes a request, cancels the request and makes a new request
before the first one is finished. 

Pattern: 

request => cancel => new request

Observable is a better pattern for situations like this.

*/
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../classes/hero';

@Injectable()
export class HeroSearchService {

	constructor(private http: Http) { }

	search(term:string): Observable<Hero[]>{
		//A. This returns the Observable from the GET method
		return this.http
			.get(`app/heros/?name=${term}`)
			//B. Observable was chained to MAP to help extract heroes from the response 
			.map(response => response.json() as Hero[]);
	}
}
