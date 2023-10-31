import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';

import { CargarScriptsService } from './services/cargar-scripts.service';
import { FormsComponent } from './components/forms/forms.component';
import { LoadersComponent } from './components/loaders/loaders.component';
import { AccordionsComponent } from './components/accordions/accordions.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    LoadersComponent,
    AccordionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
