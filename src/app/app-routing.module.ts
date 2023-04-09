import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';

const appRoute : Routes = [
  {path:'buttons', component: ButtonsComponent},
  {path:'cards', component: CardsComponent},

  {path: "", redirectTo: "/sidebar", pathMatch: "full"},
  {path:'**', component: ButtonsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
