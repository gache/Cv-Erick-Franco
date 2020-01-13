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
      url: 'https://github.com/gache/portafolio-angular',

    },
    {
      nom: 'Utilisation de lAPI Spotify',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/portafolio-angular',
    },
    {
      nom: 'Meteo de projets ',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content.',
      url: 'https://github.com/gache/portafolio-angular',
    },
    {
      nom: 'Creation Formulaire avec Angular',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/portafolio-angular',
    },
    {
      nom: 'Map',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/portafolio-angular',
    },
    {
      nom: 'Autentification',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/portafolio-angular',
    }
  ]);

  constructor() {
    console.log('service prêt');
   }

   getProjet(): Projet[]{
     return this.projetRealise;
   }
}
