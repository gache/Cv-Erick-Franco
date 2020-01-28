import { Component, OnInit } from '@angular/core';
import { ParcoursService } from '../../services/parcours.service';
import { ActivatedRoute } from '@angular/router';
import { ParcoursInterface } from '../../entities/parcours';

@Component({
  selector: 'app-experience1',
  templateUrl: './experience1.component.html',
  styleUrls: ['./experience1.component.css']
})
export class Experience1Component implements OnInit {

  listParcours: any [] = [];
  constructor(private parcourService: ParcoursService,
              private activatedRoute: ActivatedRoute, ) {

    this.activatedRoute.params.subscribe(params => {
      this.listParcours = this.parcourService.getParcours2( params ['id']);
      // console.log(params ['id']);
    });
  }

  ngOnInit() {
  }

}
