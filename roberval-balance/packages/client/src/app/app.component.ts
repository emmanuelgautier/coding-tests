import { Component } from '@angular/core';

import { IBallSubmitResponse, BallsService } from './balls.service';

@Component({
  selector: 'app-root',
  providers: [
    BallsService,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Roberval Balance';

  balls: number[] = [];
  apiResponse: IBallSubmitResponse;

  constructor(private service: BallsService) {
    this.reset();
  }

  makeThisBallTheHeaviest(n: number) {
    this.balls = this.balls.map((weight, i) => i === n ? 1 : 0);
  }

  reset() {
    this.balls = [...Array(8)].fill(0);
    this.apiResponse = null;
  }

  submit() {
    this.service
      .executeAlgorithm(this.balls)
      .subscribe(response => this.apiResponse = response);
  }
}
