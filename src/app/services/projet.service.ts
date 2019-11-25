import { Injectable } from '@angular/core';
import { Projet } from '../entities/projets';



@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  projetRealise: Projet[] = ([
    {
      nom: 'Projet Heroes',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content.',
      // site: 'https://github.com/gache/portafolio-angular',

    },
    {
      nom: 'Utilisation de lAPI Spotify',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      nom: 'Meteo de projets ',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content.',

    },
    {
      nom: 'Formulaire Angular',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      nom: 'Map',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      nom: 'Autentification',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    }
  ]);

  constructor() {
    console.log('Servicio Listo');
   }

   getProjet(): Projet[]{
     return this.projetRealise;
   }
}
