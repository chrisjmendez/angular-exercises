import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { Location } from "../model/location";

@Injectable()
export class FirebaseService {

	locations$: FirebaseListObservable<any>;

	constructor(private af:AngularFireDatabase, private router:Router) {
		this.locations$ = af.list("locations")
	}

	getAllLocations(){
		var locations:Location[] = [];
		this.locations$
		.map(Location.fromJSONArray)
		.subscribe(location => {
			console.log("location", location);
		})
	}

	fromFirebaseAuthPromise(promise):Observable<any> {
		const subject = new Subject<any>();
		promise
		.then(res => {
			subject.next(res);
			subject.complete();
		},
		err => {
			subject.error(err);
			subject.complete();
		});
		return subject.asObservable();
	}

	private onError(err:any): Observable<any> {
		console.error("FirebaseService::onError:", err);
		return Observable.throw(err.message || err);
	}
}
