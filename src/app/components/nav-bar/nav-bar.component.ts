import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  isInImage: boolean = true;

  ngOnInit() {
    window.addEventListener("scroll", ($event) => { this.onScroll($event) });
  }

  onScroll($event) {
    if (window.scrollY <= window.innerHeight) {
      this.isInImage = true;
    } else {
      this.isInImage = false;
    }
  }

}


