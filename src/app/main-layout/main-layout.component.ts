import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../static-page/header/header.component';
import { FooterComponent } from '../static-page/footer/footer.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { SidenavComponent } from '../static-page/sidenav/sidenav.component';
import { CommonUseService } from '../services/common-use.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidenavComponent,
    CommonModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  isSidebarVisible$ = this.service.sidebarVisible$;

  constructor(private service: CommonUseService) {}

  toggleSidebar() {
    this.service.toggleSidebar();
  }
}
