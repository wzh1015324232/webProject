import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mheros';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  } 
}
