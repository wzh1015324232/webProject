import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heros',
    templateUrl: './heros.component.html',
    styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];
    
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
  

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }
}
