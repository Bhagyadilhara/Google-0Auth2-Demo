import { Component, inject } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES: any[] = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
];

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthGoogleService);

  signInWithGoogle() {

    this.authService.login();

  }
}
