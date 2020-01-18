import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ComponentsComponent } from './components.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { app_routing } from './components.routes';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { AventuraComponent } from './aventura/aventura.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';





@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    ComponentsComponent,
    InicioComponent,
    AboutComponent,
    QuienesSomosComponent,
    ExperienciasComponent,
    AventuraComponent,
    ContactanosComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,    
    app_routing
  ]
  , 
  exports :[
    ComponentsComponent
  ]
})
export class ComponentsModule { }
