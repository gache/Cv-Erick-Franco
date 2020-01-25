import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propo',
  templateUrl: './propo.component.html',
  styleUrls: ['./propo.component.css']
})
export class PropoComponent implements OnInit {

  informationP: any = {
  nom: 'Erick Franco',
  ville:       'Lille France',
  nationalite: 'Français',
  telephone:   '(+33) 6 59 65 57 86',
  mail:        'erickfrancodelgado@hotmail.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
