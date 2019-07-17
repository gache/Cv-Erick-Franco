import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompetencesComponent } from './components/competences/competences.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProfilComponent,
    ParcoursComponent,
    ContactComponent,
    CompetencesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
