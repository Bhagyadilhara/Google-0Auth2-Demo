import { Component, inject } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const MODULES = [CommonModule];
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MODULES],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  profile = this.authService.profile;

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
