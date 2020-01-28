import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/projet.service';
import { ProjetInterface } from '../../entities/projets';
import { LangagesService } from '../../services/langages.service';


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  projets: ProjetInterface[] = [];
  listLangage: any [] = [];
  listLangage2: any [] = [];


  constructor(private projetServices: ProjetService, 
              private langageService: LangagesService) {
    // j'obtien ma liste de projet 
    this.projets = this.projetServices.getProjet();
      // j'obtien ma liste de langage
      this.listLangage = this.langageService.getLangage();
          // j'obtien ma liste de langage2
        this.listLangage2 = this.langageService.getLangage2();
  

  }

  ngOnInit() {
  }

}
