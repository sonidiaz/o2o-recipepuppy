import { Component, OnInit} from '@angular/core';
import { RecetasService } from '../../../servicios/recetas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  _resetasEncontradas : any[] = [];
  
  constructor( private resetaService: RecetasService, private router: Router) {
    
   }

  ngOnInit() {
  }
  buscarReceta( termino: string ) {
   // this._resetasEncontradas = this.resetaService.buscarRecetas(termino);
   this.router.navigate(['/buscar', termino]);
  }
}
