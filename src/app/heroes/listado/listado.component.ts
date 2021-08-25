import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = "";

  constructor() { }

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';

  }





  ngOnInit(): void {
  }

}
