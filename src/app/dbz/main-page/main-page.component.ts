import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  constructor() { }

  cambiarNombre(event:any){
    console.log(event.target.value);
  }

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }
 
  ngOnInit(): void {
  }

}
