import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private RecetasToUrl: Recetas[] = [];
  recetasTodas: any = {};
  constructor( private http: HttpClient ) {
    this.getRecetasURl();
  }
  getRecetasURl() {
      this.http.get('http://www.recipepuppy.com/api/').subscribe( (recetas: any) => {
      this.recetasTodas = recetas.results;
      for ( let i = 0; i < this.recetasTodas.length; i++ ) {
        this.RecetasToUrl.push(this.recetasTodas[i]);
      }
    });
  }

  getRecetas() {
    return this.RecetasToUrl;
  }

  buscarRecetas(termino: string){
    let recetasArr: Recetas[] = [];

    termino = termino.toLowerCase();

    for( let receta of this.RecetasToUrl ){
      let nombre = receta.title.toLowerCase();
      if( nombre.indexOf(termino) >= 0  ){
        recetasArr.push(receta);
      }
    }
    return recetasArr;
  }
}

export interface Recetas {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}
