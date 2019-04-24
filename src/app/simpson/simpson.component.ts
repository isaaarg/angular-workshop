import { Component, OnInit, Input } from '@angular/core';
import {PokeapiService} from '../pokeapi.service';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css']
})
export class SimpsonComponent implements OnInit {

  @Input() src = "https://static01.diariodenavarra.es/uploads/imagenes/bajacalidad/2012/02/17/_homer_1f8a9bc5.jpg?7023b72c1c44f794beb1a56775c1cf91"
  name = "Homer"

  constructor(public pk:PokeapiService) {
  }

  ngOnInit() {
  }

}
