import { Component, OnInit } from '@angular/core';
//https://angular.io/docs/ts/latest/guide/router.html
import { Router } from '@angular/router';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	//Create a fresh instance of HeroService at the constructor()
	providers: [HeroService]
})

export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;

	constructor(private router:Router, private heroService: HeroService) { }
	
	ngOnInit():void { 
		//Data Services
		this.getHeroes();
	}
	
	//This is an event handler that will navigate the user to an item/detail template
	gotoDetail():void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	getHeroes():void {
		//Once data is retreived, assign it to "heroes"
		this.heroService.getDataSlowly().then(heroes => this.heroes = heroes);
	}
	
	// This allows for preformance improvements by list rendering by tracking a unique ID
	// https://coryrylan.com/blog/angular-ng-for-syntax
	// https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5#.84ucrtf14
	trackByFn(index, item):void {
	  //console.log("trackByFn:", item.id);
	  return item.id;
	}
	
	add(name: string): void{
		//A. Remove any whitespace
		name = name.trim();
		//B. Validate that there's a name
		if(!name){ return; }
		//C. Create a name
		this.heroService.create(name)
			.then(hero => {
				//TODO: Fix this. It's not updating the new hero
				console.log("From the Web Server:", hero);
				this.heroes.push(hero);
				//console.log(this.heroes);
				this.selectedHero = null;
			});
	}
	
	delete(hero: Hero):void{
		//console.log(hero.id);
		this.heroService
		.delete(hero.id)
		.then(() => {
			this.heroes = this.heroes.filter(h => h !== hero);
			if(this.selectedHero === hero){ this.selectedHero = null; }
		});
	}
	
	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}
}
