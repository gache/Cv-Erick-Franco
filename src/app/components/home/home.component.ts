import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() scrollToParent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  scrollTo(id) {
    this.scrollToParent.emit(id);
  }

  /* Fonction récupérant l'id et faisant le scroll vers l'élément voulu */
  scrollToId(id) {
    const el: HTMLElement|null = document.getElementById(id);
    if (el) {
      setTimeout(() =>
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
    }
  }
}
