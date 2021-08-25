import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    //las declaraciones van a ser mis componentes que tengo dentro de heroes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //exports, significan que cosas quiero hacer publicas o visibles fuera de este módulo (heroes)
    exports:[
        ListadoComponent,
        HeroeComponent
    ],
    //imports, significa que dentro van objetos que se colocan en los imports
    imports:[
        //CommonModule sirve para muchas cosas, entre  ellos el ngFor y el e ngIf
        CommonModule

    ]
})
export class HeroesModule{

}