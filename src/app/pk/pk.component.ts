import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'app/pokeapi.service';

@Component({
  selector: 'app-pk',
  templateUrl: './pk.component.html',
  styleUrls: ['./pk.component.css']
})
export class PkComponent implements OnInit {

  name;
  src;
  constructor(public pk:PokeapiService) { }

  ngOnInit() {
  }

  pokeget(){
    console.log("GETTING PK");
    this.pk.getPokemon(25).subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.src = data.sprites.front_default;
    });
  }
}
