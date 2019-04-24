import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  show:Boolean = false;
  elementos:string[] = [
    "https://static01.diariodenavarra.es/uploads/imagenes/bajacalidad/2012/02/17/_homer_1f8a9bc5.jpg?7023b72c1c44f794beb1a56775c1cf91",
    "https://ep01.epimg.net/cultura/imagenes/2018/09/05/television/1536159661_770168_1536160683_noticia_normal.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnl1IRxWUPwPsGgVhPQppu10kX5lB8aXVUCRvznwupgkJbQGq0"
  ];
  constructor() { }

  ngOnInit() {
  }

  hideLista(){
    console.log("Hide lista");
    this.show = true;
  }
  showLista(){
    console.log("Show lista");
    this.show = false;
  }

}
