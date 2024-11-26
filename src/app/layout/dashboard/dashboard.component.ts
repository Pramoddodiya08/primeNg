import { Component } from '@angular/core';
import { CustomPipe } from '../../../common/custom.pipe';
import { CustomDirective } from '../../../common/custom.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CustomPipe, CustomDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  name: string = 'test';
}
