import { Component } from '@angular/core';
import {
  DatePipe,
  UpperCasePipe,
  LowerCasePipe,
  CurrencyPipe,
  DecimalPipe,
  PercentPipe,
  JsonPipe,
} from '@angular/common';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
  ],
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss'],
})
export class PipesDemoComponent {
  currentDate: Date = new Date();
  sampleText: string = 'Learning Angular Pipes!';
  price: number = 12345.6789;
  percentage: number = 0.85;
  jsonObject = { name: 'Angular', version: 16, standalone: true };
}
