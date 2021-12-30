import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {DameGameComponent} from "./components/dame-game/dame-game.component";

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'dame',
    component: DameGameComponent
  },
  {
    path:'',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
