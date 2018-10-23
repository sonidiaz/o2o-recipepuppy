import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecetasService, Recetas } from '../../servicios/recetas.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html'
})
export class RecetasComponent implements OnInit {

  recetas: Recetas[] = [];
  constructor( private recetasService: RecetasService, private http: HttpClient ) {
    // this.http.get('http://www.recipepuppy.com/api/').subscribe( receta => console.log(receta) );
  }

  ngOnInit() {
    this.recetas = this.recetasService.getRecetas();
    // console.log(this.recetas);
  }

}
