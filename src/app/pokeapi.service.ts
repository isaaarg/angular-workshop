import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class PokeapiService {

  constructor(public http:Http){ }

  name:String = 'asdf';

  getPokemon(id=25){
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get(url)
    .map(r => r.json());
  }

}
