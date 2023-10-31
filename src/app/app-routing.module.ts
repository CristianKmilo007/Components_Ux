import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoadersComponent } from './components/loaders/loaders.component';

const appRoute : Routes = [
  {path:'buttons', component: ButtonsComponent},
  {path:'cards', component: CardsComponent},
  {path:'forms', component: FormsComponent},
  {path:'loaders', component: LoadersComponent},
  {path:'accordions', component: AccordionsComponent},

  {path: "", redirectTo: "/sidebar", pathMatch: "full"},
  {path:'**', component: ButtonsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
