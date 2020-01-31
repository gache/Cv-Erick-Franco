import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailExperienceComponent } from './components/detail-experience/detail-experience.component';




const ROUTES: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'detail/:id', component: DetailExperienceComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
