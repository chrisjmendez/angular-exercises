import { Component, Input, OnInit } from '@angular/core';
//We use the params observable to extract the id parameter value from the ActivatedRoute
import { ActivatedRoute, Params }   from '@angular/router';
//browser's history stack using the Location
import { Location }                 from '@angular/common';
//Switch map operator is used with route parameters
import 'rxjs/add/operator/switchMap';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  goBack(): void {
    this.location.back();
  }

  constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

  ngOnInit() {
   this.route.params
	  //maps the id in the observable route parameters to a new Observable
	  //If the user re-navigates to this component while a getHero request is still inflight, switchMap cancels that old request before calling HeroService.getHero again.
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
}