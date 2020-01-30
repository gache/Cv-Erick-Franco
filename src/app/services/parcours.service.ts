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
      description2:"Mode de travail du projet en Agile. Interviews des 4 équipes principales du service pour identification des contraintes et attentes de chacun de l’application. Rédaction de User stories et création des Personas. L’objectif de l’application est de connaître l’état de santé ou l’avancement des différents projets de l’équipe. Chaque membre de l’équipe saisit son indice de confiance ou état de criticité de son projet. (Soleil, Couvert, Nuage, Orage). Tests réguliers avec les utilisateurs pour feedback immédiat, prise en compte et intégrée dans les itérations Agile."
    },
    {
      titre: 'Technicien Support Informatique pour Maisons du monde',
      description:" Identification, analyse et traitement des demandes des utilisateurs, saisie de données, avec l'outil Easyvista.",
      date: 'Avril 2017',
      description2:"Prise d’appels en français et espagnol Identification, analyse et traitement des demandes des utilisateurs. Création et suivi de tickets avec l'outil Easyvista. Gestion du logiciel de caisse GCCLocalpos Generix. Dépannage réseau des différents matériels du magasin. Mise en réseau des matériels informatiques en passant par le Sonicwall. Gestion des tablettes des magasins. Configuration de l’imprimante A4. Traitement et suivi des demandes SAV pour le matériel",
    },
    {
      titre: 'Chargé de mission droits humains',
      description: " Coordination du travail avec des ONG, rédaction de rapports économiques, organisation d’événements.",
      date: 'Avril 2015',
      description2:'Coordination et suivi du travail avec des ONG. Rédaction de rapports économiques. Rédaction et création de fiches techniques. Co-organisation de l’assemblée annuelle de l’association'
    },
    {
      titre: 'Trésorier Association TEJE-Lille',
      description: 'Montage de projets collectifs avec des bénévoles.',
      date: 'Mai 2012',
      description2:'Gestion des comptes et élaboration des budgets. Montage de projets collectifs de solidarité internationale avec des bénévoles. Mise en place d’actions de solidarité internationale. Création d’animations ludiques. Organisation d’évènements (droits humains et éducation au développement…)'

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
