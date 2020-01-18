import  {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AventuraComponent } from './aventura/aventura.component';
import { parseHostBindings } from '@angular/compiler';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const APP_ROUTE : Routes = [
    {path : '' , component : InicioComponent},
    {path: '**', component : PagenotfoundComponent},
    {path : 'inicio', component : InicioComponent},
    {path : 'somos', component : QuienesSomosComponent },
    {path : 'experiencias' , component : ExperienciasComponent},
    {path : 'aventura' , component : AventuraComponent},
    {path : 'Contactanos' , component : ContactanosComponent}
]


export const app_routing = RouterModule.forRoot(APP_ROUTE)