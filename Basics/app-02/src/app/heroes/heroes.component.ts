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
	
	//THis is a handler that will navigate the user to a template
	gotoDetail():void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	getHeroes():void {
		//Once data is retreived, assign it to "heroes"
		this.heroService.getDataSlowly().then(heroes => this.heroes = heroes);
	}
	
	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}
}
