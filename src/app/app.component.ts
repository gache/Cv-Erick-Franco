import { Component, OnDestroy } from '@angular/core';
import { ScrollEventService } from './services/scroll-event.service';
import { Subscription } from 'rxjs';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnDestroy {

  title = 'erickFranco';
  souscription: Subscription;

  constructor(private scrollEventService: ScrollEventService,
              private config: NgsRevealConfig) {
    this.souscription = this.scrollEventService.getMessage().subscribe(DOMid => {
      this.scrollToId(DOMid);
    });
    config.duration = 10000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  }

  ngOnDestroy(): void {
    this.souscription.unsubscribe();
  }

  scrollToId(id) {
    const DOMelement = document.getElementById(id);
    DOMelement.children[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }


}
