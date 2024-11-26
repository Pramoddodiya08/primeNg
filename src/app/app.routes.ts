import { Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegisterComponent } from './Auth/register/register.component';
import { loginAuthGuard } from './authGaurd/login-auth.guard';
import { PipesDemoComponent } from './learning-comp/pipes-demo/pipes-demo.component';
import { FormsComponent } from './learning-comp/Forms/forms/forms.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [loginAuthGuard],
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'pipe', component: PipesDemoComponent },
      { path: 'forms', component: FormsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
