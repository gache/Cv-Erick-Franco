import { Component, OnInit } from '@angular/core';
import { ParcoursService } from '../../services/parcours.service';






@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  listParcours: any[] = [];
  listDiplome: any[] = [];

  constructor(private _parcours: ParcoursService ) {
   // 
    this.listParcours = this._parcours.getParcours();
    // console.log(this.listParcours);

  }

  ngOnInit() {
  }

}
