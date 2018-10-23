import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../servicios/recetas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: '../recetas/recetas.component.html'
})
export class BuscadorComponent implements OnInit {
  URl: string = window.location.href;
  termino: string = '';
  recetas: any[] = [];

  constructor( private activateRoute: ActivatedRoute, private recetasService: RecetasService, private router: Router) {
    console.log('inicia bucador');
   }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      // if(this.URl.indexOf('buscar') > -1) {
      //   let _valueURl = this.URl.split('/');
      //   let _lastValue = _valueURl.pop();
      //   this.router.navigate(['/buscar', _lastValue]);
      // }

      this.termino = params['termino'];
      // this.recetas = this.recetasService.buscarRecetas(params['termino']);
      this.recetas = this.recetasService.buscarRecetas(params['termino']);
      console.log(this.recetas);
    });
  }

}
