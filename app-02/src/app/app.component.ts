import { Component, OnInit } from '@angular/core';

import { Hero } from './classes/hero';
import { HeroService } from './services/hero.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	//Create a fresh instance of HeroService at the constructor()
	providers: [HeroService]
})

export class AppComponent implements OnInit {
	title = 'Tour of Heros';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }
	
	ngOnInit():void { 
		//Data Services
		this.getHeroes();
		//First selected item
		
//		this.selectedHero = this.heroes[0]
	}  

	getHeroes():void{
		//Once data is retreived, assign it to "heroes"
		this.heroService.getDataSlowly().then(heroes => this.heroes = heroes);
		console.log(this.heroes);
	}
	
	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}  
}
