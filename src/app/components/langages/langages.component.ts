import { Component, OnInit } from '@angular/core';
import { LangagesService } from '../../services/langages.service';

@Component({
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.css']
})
export class LangagesComponent implements OnInit {

  listLangage: any [] = [];
  listLangage2: any [] = [];

  constructor(private langageService: LangagesService) {
    // j'obtien ma liste de langage
    this.listLangage = this.langageService.getLangage();
    // j'obtien ma liste de langage2
    this.listLangage2 = this.langageService.getLangage2();
   }

  ngOnInit() {
  }

}
