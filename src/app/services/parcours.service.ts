import { Injectable } from '@angular/core';
import { ParcoursInterface } from '../entities/parcours';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  parcour: ParcoursInterface [] = [
    {
      titre: 'Développeur web',
      description:"Création d'une application web avec le Framework Angular.",
      date: 'Juin 2019',
      description2:"Création d'une application web de gestion de projet avec le Framework Angular.\n Mode de travail du projet en Agile. Interviews des 4 équipes principales du service pour identification des contraintes et attentes de chacun de l’application. Rédaction de User stories et création des Personas. L’objectif de l’application est de connaître l’état de santé ou l’avancement des différents projets de l’équipe."

    },
    {
      titre: 'Technicien Support Informatique pour Maisons du monde',
      description:" Identification, analyse et traitement des demandes des utilisateurs, saisie de données, avec l'outil Easyvista.",
      date: 'Avril 2017',
      description2:''
    },
    {
      titre: 'Chargé de mission droits humains',
      description: " Coordination du travail avec des ONG, rédaction de rapports économiques, organisation d’événements.",
      date: 'Avril 2015',
      description2:''
    },
    {
      titre: 'Trésorier Association TEJE-Lille',
      description: 'Montage de projets collectifs avec des bénévoles.',
      date: 'Mai 2012',
      description2:''

    }
  ];

  constructor() { }

  getParcours(): ParcoursInterface[] {
    return this.parcour;
  }
  getParcours2(index: string): ParcoursInterface[] {
    return this.parcour [index];
  }
}
