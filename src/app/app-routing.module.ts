import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Experience1Component } from './components/experience1/experience1.component';
import { HomeComponent } from './components/home/home.component';



const ROUTES: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'experience1/:id', component: Experience1Component },
  { path: '**', pathMatch:'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
