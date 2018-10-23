
import { RouterModule, Routes } from "@angular/router";
import { RecetasComponent } from '../app/components/recetas/recetas.component';
import { BuscadorComponent } from '../app/components/buscador/buscador.component';


const APP_ROUTES: Routes = [
    { path: '', component: RecetasComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch:'full', redirectTo:''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);