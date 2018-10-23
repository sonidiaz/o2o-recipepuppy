import { Component, OnInit} from '@angular/core';
import { RecetasService } from '../../../servicios/recetas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  _resetasEncontradas : any[] = [];
  
  constructor( private resetaServive: RecetasService) {
    
   }

  ngOnInit() {
  }
  buscarReceta( termino: string ) {
    this._resetasEncontradas = this.resetaServive.buscarRecetas(termino);
    console.log(this._resetasEncontradas);
  }
}
