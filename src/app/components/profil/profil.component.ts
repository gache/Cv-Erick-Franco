import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Output() scrollToParent: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.scrollToParent = new EventEmitter();
  }

  ngOnInit() {
  }

  scrollTo(id) {
    this.scrollToParent.emit(id);
  }

}
