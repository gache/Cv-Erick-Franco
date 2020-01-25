import { Injectable } from '@angular/core';
import { DiplomeInterface } from '../entities/diplome';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  diplome: DiplomeInterface [] = [
    {
      nomDiplome: 'Concepteur Développeur Web Niveau II Bac +3',
      description: 'Formation dans le cadre du Fongecif à Aston école informatique, Lille, France',
      annee: 'Juillet 2019'
  },
    {
      nomDiplome: 'Apprendre la programmation en JAVA(de débutant à avancé)',
      description: 'Formation à distance avec la plataforme Udemy',
      annee: 'Avril 2019'
  },
    {
      nomDiplome: 'Angular de Zero à expert',
      description: 'Formation à distance avec la plataforme Udemy',
      annee: 'Mars 2019'
  },
    {
      nomDiplome: 'Programmation pour les débutants - les premiers pas',
      description: 'Formation à distance avec la plataforme Udemy',
      annee: 'Janvier 2019'
  },
    {
      nomDiplome: 'Master 2 professionnel Solidarité Internationale',
      description: 'Université Lille 2, à Lille, France',
      annee: 'Décembre 2015'
  },
    {
      nomDiplome: 'Master 1 Sciences politiques-Politique européenne et internationale',
      description: 'Université Lille 2, à Lille, France',
      annee: 'Juin 2014'
  }
  ];

  constructor() { }

    getDiplome(): DiplomeInterface[] {
      return this.diplome;
      }

}
