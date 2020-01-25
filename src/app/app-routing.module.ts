import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Experience1Component } from './components/experience1/experience1.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ParcoursComponent } from './components/parcours/parcours.component';



const ROUTES: Routes = [
  { path: ' ', component: ProfilComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'experience1/:id', component: Experience1Component },
  { path: '**', pathMatch:'full', redirectTo: 'profil' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
