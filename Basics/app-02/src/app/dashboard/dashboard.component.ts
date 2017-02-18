import { Component, OnInit } from '@angular/core';

//A. Import Hero Class
import { Hero } from '../classes/hero';
//B. Import Hero Data Service
import { HeroService } from '../services/hero.service';

@Component({
	//module-relative loading of the templateUrl.
	moduleId: module.id,
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	//D. Define a array property
	heroes: Hero[] = [];

	//E. Inject heroService and hold it in a private field
	constructor(private heroService: HeroService) { }

	ngOnInit() {
		//F. Call the service 
		this.heroService.getDataSlowly()
			//G. Get heroes inside the Angular lifecycle
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
