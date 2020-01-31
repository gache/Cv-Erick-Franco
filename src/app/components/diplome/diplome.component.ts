import { Component, OnInit } from '@angular/core';
import { DiplomeService } from 'src/app/services/diplome.service';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.css']
})
export class DiplomeComponent implements OnInit {

  listDiplome: any[] = [];
  constructor(private diplome: DiplomeService) {
      this.listDiplome = this.diplome.getDiplome();
   }

  ngOnInit() {
  }

}
