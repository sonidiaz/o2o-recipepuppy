import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../servicios/recetas.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  recetas: any[] = [];

  constructor( private activateRoute: ActivatedRoute, private recetasService: RecetasService) { }

  ngOnInit() {
  
    this.activateRoute.params.subscribe( params => {
      this.recetas = this.recetasService.buscarRecetas(params['termino']);
      console.log(this.recetas);
    })
  
  }

}
