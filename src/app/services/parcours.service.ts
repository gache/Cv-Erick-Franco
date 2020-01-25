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
      date: 'Juin 2019'

    },
    {
      titre: 'Technicien Support Informatique pour Maisons du monde',
      description:" Identification, analyse et traitement des demandes des utilisateurs, saisie de données, avec l'outil Easyvista.",
      date: 'Avril 2017'

    },
    {
      titre: 'Chargé de mission droits humains',
      description:" Coordination du travail avec des ONG, rédaction de rapports économiques, organisation d’événements.",
      date: 'Avril 2015'

    },
    {
      titre: 'Trésorier Association TEJE-Lille',
      description:" Montage de projets collectifs avec des bénévoles.",
      date: 'Mai 2012'

    }
  ];

  constructor() { }

  getParcours(): ParcoursInterface[] {
    return this.parcour;
  }
}
