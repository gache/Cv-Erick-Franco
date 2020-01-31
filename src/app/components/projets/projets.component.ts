import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';
import { ProjetInterface } from '../../entities/projets';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets: ProjetInterface[] = [];

  constructor(private projetServices: ProjetService) {
     // j'obtien ma liste de projet 
    this.projets = this.projetServices.getProjet();
  }

  ngOnInit() {
  }

}
