import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  @Input() parentCount: number = 0;  //>from marent to child
  
  // Emitters to ask the parent to update the value
  @Output() modify = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();

  inc() {
    this.modify.emit(1);
  }

  dec() {
    //prevent below 0
    if (this.parentCount > 0) {
      this.modify.emit(-1);
    }
  }

  increaseBy(amount: number) {
    this.modify.emit(amount);
  }

  resetValue() {
    this.reset.emit();
  }
}
