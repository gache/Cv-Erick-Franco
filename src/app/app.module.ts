import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importation de la route
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Importation des Service

import { ParcoursService } from './services/parcours.service';
import { ProjetService } from './services/projet.service';

// Modules
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { StickyNavModule } from 'ng2-sticky-nav';


// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { ReseauxComponent } from './components/reseaux/reseaux.component';
import { PropoComponent } from './components/propo/propo.component';
import { from } from 'rxjs';
import { Experience1Component } from './components/experience1/experience1.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProfilComponent,
    ParcoursComponent,
    ContactComponent,
    CompetencesComponent,
    ReseauxComponent,
    PropoComponent,
    Experience1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgsRevealModule,
    StickyNavModule
  ],
  providers: [
  NgsRevealConfig,
  ParcoursService,
  ProjetService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
