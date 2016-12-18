import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
	/*getHeroes(): Hero[] {
		return HEROES;
	}*/
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	//getHeroesAcync(): Observable<any> {
	//	return Observable.of(HEROES);
    //}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
				.then(heroes => heroes.find(hero => hero.id === id));
	}

}