import { Component, signal } from '@angular/core';

import { Parent } from './Components/parent/parent';

@Component({
  selector: 'app-root',
  imports: [Parent  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Counter');
}
