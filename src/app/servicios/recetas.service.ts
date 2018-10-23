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
      this.http.get('http://www.recipepuppy.com/api/').subscribe( (recetas) => {
      this.recetasTodas = recetas.results;
      for ( let i = 0; i < this.recetasTodas.length; i++ ) {
        this.RecetasToUrl.push(this.recetasTodas[i]);
      }
    });
  }

  getRecetas() {
    return this.RecetasToUrl;
  }
}

export interface Recetas {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}
