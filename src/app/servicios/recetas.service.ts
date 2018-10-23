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

  buscarRecetaLive(termino: string) {
    const _filter = this.RecetasToUrl.filter( receta => receta.title.indexOf(termino) !== -1 );
    return _filter;
  }

  buscarRecetas(termino: string): Recetas[] {
    const recetasArr: Recetas[] = [];

    termino = termino.toLowerCase();
    console.log(termino);
    for ( const receta of this.RecetasToUrl ) {
      const nombre = receta.title.toLowerCase();
      if ( nombre.indexOf(termino) >= 0  ) {
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
