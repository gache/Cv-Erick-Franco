import { Component, OnDestroy, ViewChild, ElementRef, ViewChildren } from '@angular/core';
// import { ScrollEventService } from './services/scroll-event.service';
import { Subscription } from 'rxjs';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnDestroy {

  title = 'erickFranco';
  souscription: Subscription;

  constructor(
    private config: NgsRevealConfig) {
    config.duration = 10000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  }

  ngOnDestroy(): void {
    this.souscription.unsubscribe();
  }

  /* Fonction récupérant l'id et faisant le scroll vers l'élément voulu */
  // scrollToId(id) {
  //   const el: HTMLElement|null = document.getElementById(id);
  //   if (el) {
  //     setTimeout(() =>
  //       el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 0);
  //   }
  // }


}
