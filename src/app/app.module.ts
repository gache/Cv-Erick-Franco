import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importation de la route
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Importation des Service
import { ParcoursService } from './services/parcours.service';
import { ProjetService } from './services/projet.service';
import { DiplomeService } from './services/diplome.service';
import { LangagesService } from './services/langages.service';
import { DatafireService } from './services/datafire.service';


// Modules
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { StickyNavModule } from 'ng2-sticky-nav';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';




// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReseauxComponent } from './components/reseaux/reseaux.component';
import { PropoComponent } from './components/propo/propo.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { DiplomeComponent } from './components/diplome/diplome.component';
import { LangagesComponent } from './components/langages/langages.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { DetailExperienceComponent } from './components/detail-experience/detail-experience.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProfilComponent,
    ParcoursComponent,
    ContactComponent,
    ReseauxComponent,
    PropoComponent,
    HomeComponent,
    DiplomeComponent,
    LangagesComponent,
    ProjetsComponent,
    DetailExperienceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgsRevealModule,
    StickyNavModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
  NgsRevealConfig,
  ParcoursService,
  ProjetService,
  DiplomeService,
  LangagesService,
  DatafireService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
