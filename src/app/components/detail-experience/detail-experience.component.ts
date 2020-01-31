import { Component, OnInit } from '@angular/core';
import { ParcoursService } from '../../services/parcours.service';
import { ActivatedRoute } from '@angular/router';
import { ParcoursInterface } from '../../entities/parcours';

@Component({
  selector: 'app-detail-experience',
  templateUrl: './detail-experience.component.html',
  styleUrls: ['./detail-experience.component.css']
})
export class DetailExperienceComponent implements OnInit {

  listParcours: ParcoursInterface ;

  constructor(private parcourService: ParcoursService,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.params.subscribe(params => {
                  this.listParcours = this.parcourService.getParcours2( params [' id ']);
                  // console.log(params ['id']);
                });
               }

  ngOnInit() {
  }

}
