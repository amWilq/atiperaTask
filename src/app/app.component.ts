import { Component } from '@angular/core';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [PeriodicTableComponent],

})
export class AppComponent {}
