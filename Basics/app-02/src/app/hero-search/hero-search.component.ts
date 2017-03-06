import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from '../classes/hero';
import { HeroSearchService } from '../services/hero-search.service';

@Component({
	moduleId: module.id,
	selector: 'app-hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css'],
	providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

	heroes: Observable<Hero[]>;
	// A Subject is a producer of observable event stream
	// searchTerms produces an Observable of strings
	private searchTerms = new Subject<string>();

	constructor(private heroSearchService:HeroSearchService, private router:Router) { }

    // Each call to search puts a new string into the subject's observable stream by calling next
	search(term:string):void {
		this.searchTerms.next(term);
	}

	ngOnInit() {
		this.heroes = this.searchTerms
		// Don't send every event to your server, wait 300ms then send 
		.debounceTime(300)
		// ignore if next search term is same as previous
		.distinctUntilChanged()
		// switchMap (formerly flatMapLatest) preserves the original request while returning the most recent http request
		// switch to the new observable each time the term changes
		.switchMap(term => term
		// return the http search observable
		? this.heroSearchService.search(term)
		// or the observable of empty heroes if there was no search term
		// Short-circuit the http method call and return an empty array if search text is empty
		: Observable.of<Hero[]>([]) )
		// Intercept a failed observable 
		.catch(this.onError);
	}
	
	gotoDetail(hero: Hero):void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
	
	onError(error){
		console.log(error);
		return Observable.of<Hero[]>([]);
	}
}
