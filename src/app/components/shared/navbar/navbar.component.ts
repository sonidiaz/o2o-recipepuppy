import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buscarReceta( termino: string ) {
    // this.router.navigate( ['/buscar',termino] );
    console.log('Buscando recetas');
  }
}
