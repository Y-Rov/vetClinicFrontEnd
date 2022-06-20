import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { LoginComponent } from '../../shared/components/authComponents/login-page/login.component'
import { SignupComponent } from '../../shared/components/authComponents/signup-page/signup.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
