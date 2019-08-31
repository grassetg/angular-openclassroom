import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  minutes = 0;
  counterSubcription: Subscription;

  ngOnInit() {
    const counter = interval(60000);
    this.counterSubcription = counter.subscribe(
      (value) => {
        this.minutes = value + 1;
      },
      (error) => {
        console.log('Uh-oh, an error occured! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubcription.unsubscribe();
  }

}
