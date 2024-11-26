import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  showEffect: boolean = false;
  logoImageUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.logoImageUrl = '/assets/images/thumbnail.png';
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;

      if (username == 'Admin' && password == 'admin') {
        this.showEffect = true;
        setTimeout(() => {
          this.showEffect = false;
          let data = {
            name: 'Admin',
            isVerified: 'true',
          };
          localStorage.setItem('authUser', JSON.stringify(data));
          this.router.navigate(['/dashboard']);
        }, 2000);
      } else {
        alert('Invalid username or password');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
