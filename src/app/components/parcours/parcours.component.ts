import { Component, OnInit } from '@angular/core';
import { ParcoursService } from '../../services/parcours.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  listParcours: any[] = [];

  constructor(private _parcours: ParcoursService,
    private router: Router, ) {

    this.listParcours = this._parcours.getParcours();
    // console.log(this.listParcours);
  }

  ngOnInit() {
  }
  voirExperience(idx: number) {
    this.router.navigate(['experience1', idx]);
  }
}
