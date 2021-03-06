/*
Description:

Promises are very useful but they're not great in situations where
a user makes a stream (or sequence) of events such as: 

• Making the request
• Cancelling the request
• Invoking a new request before the first one is finished.

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

import { Observable }  from 'rxjs/Observable';

//Observables work with operators such as maps
import 'rxjs/add/operator/map';

import { Hero } from '../classes/hero';

@Injectable()
export class HeroSearchService {
	
	private serverURL = "http://localhost:8080/heroes/?name";

	constructor(private http: Http) { }

	search(term:string): Observable<Hero[]>{
		console.log(term)
		//A. This returns the Observable from the GET method
		return this.http
			//TODO: Adjust app02-backend to handle this request
			.get(`${this.serverURL}=${term}`)
			//B. Observable was chained to MAP to help extract heroes from the response 
			//   We must do this otherwise we can't even get the data from the raw response.
			.map(response => response.json() as Hero[])
	}

	private onError(error:any): Observable<any> {
		console.error("An error occured", error);
		return Observable.throw(error.message || error);
	}
}
