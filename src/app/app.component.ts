import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'erickFranco';
  subscription: Subscription;

  constructor(private config: NgsRevealConfig) {
    config.duration = 10000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
