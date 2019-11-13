import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
