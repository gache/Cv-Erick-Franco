import { Injectable } from '@angular/core';
import { ProjetInterface } from '../entities/projets';




@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  projetRealise: ProjetInterface[] = ([
    {
      nom: 'Projet Heros',
      langage:'Angular',
      description: "C’est une application d'une page au (SPA) dans cette application on va utiliser le système de Routes en Angular. L’idée est de pouvoir naviguer entre les pages sans faire refresh du navigateur. Aussi on va faire un Service, celle-ci aura comme objectif de manipuler et nous montrer l’information à chaque fois qu’on la demande.",
      url: 'https://github.com/gache/Cv-Erick-Franco',
    },
    {
      nom: "Utilisation de l'API Spotify",
      langage: 'Angular',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/SpotiApp',
    },
    {
      nom: 'Meteo de projets ',
      langage: 'NodeJs',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content.',
      url: 'https://github.com/gache/clima-app-node',
    },
    {
      nom: 'Creation Formulaire avec Angular',
      langage: 'Angular',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/portafolio-angular',
    },
    {
      nom: 'Creation du CRUD avec Firebase',
      langage: 'Angular',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/CRUD-avec-Firebase',
    },
    {
      nom: 'Autentification',
      langage: 'Angular',
      description: 'lorem ipsum  This card has supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://github.com/gache/portafolio-angular',
    }
  ]);

  constructor() {
    // console.log('service prêt');
   }

   getProjet(): ProjetInterface[]{
     return this.projetRealise;
   }

}
