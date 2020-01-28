import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangagesService {

  langage: any [] = [
    {
      langage: 'Angular',
      porcentage: '60%'
    },
    {
      langage: 'HTML5/CSS3',
      porcentage: '70%'
    },
    {
      langage: 'Java',
      porcentage: '50%'
    }
  ];
  langageDeux: any [] = [
    {
      langage2: 'NodeJS',
      porcentage: '50%'
    },
    {
      langage2: 'Javascript',
      porcentage: '50%'
    },
    {
      langage2: 'SQL',
      porcentage: '60%'
    }
  ];

  constructor() { }

  getLangage() {
    return this.langage;
  }
  getLangage2() {
    return this.langageDeux;
  }
}
