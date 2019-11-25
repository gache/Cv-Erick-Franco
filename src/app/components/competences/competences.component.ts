import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';
import { Projet } from '../../entities/projets';



@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  projets: Projet[]= [];

  constructor(private projetServices: ProjetService) {
    this.projets = this.projetServices.getProjet();

  }

  ngOnInit() {
  }

}
