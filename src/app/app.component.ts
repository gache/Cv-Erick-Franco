import { Component, OnDestroy } from '@angular/core';
import { ScrollEventService } from './services/scroll-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'erickFranco';
  souscription: Subscription;

  constructor(private scrollEventService: ScrollEventService) {
    this.souscription = this.scrollEventService.getMessage().subscribe(DOMid => {
      this.scrollToId(DOMid);
    });
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
