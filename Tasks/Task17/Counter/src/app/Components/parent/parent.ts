import { Component } from '@angular/core';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-parent',
  imports: [Counter],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  sharedCount = 0;

  changeSharedCount(amount: number) {
    this.sharedCount += amount;
  }

  resetSharedCount() {
    this.sharedCount = 0;
  }
}
