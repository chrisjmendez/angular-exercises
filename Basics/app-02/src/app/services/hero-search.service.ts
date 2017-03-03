/*
Description:

Promises are very useful but they're not great in situations where
a user makes a stream (or sequence) of events such as: 
• making the request
• cancelling the request
• invoking a new request before the first one is finished.

Diagram: 
request => cancel => new request

Observables are a way of processing a stream of events. A stream also 
means that a bunch of stuff is sent over a period of time. In this 
sitatuion –where we are watching keystrokes– it's a better pattern 
than Promises.

Observables provides a series of operators –to asynchronous data– that allow 
you to manipulate things as they come down that stream. You can map them, 
you can catch errors, etc.
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
			//   We must do this otherwise we can't even get the data from the raw response.
			.map(response => response.json() as Hero[]);
	}
}
