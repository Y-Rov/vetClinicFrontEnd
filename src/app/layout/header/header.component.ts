import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { MessagingService } from 'src/app/features/messaging/services/messaging.service';
import { UserService } from 'src/app/features/userDashboard/services/userService/user.service';
import { LoginComponent } from '../../shared/components/authComponents/login-page/login.component'
import { SignupComponent } from '../../shared/components/authComponents/signup-page/signup.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userId: number = 0;
  profilePic?: string;

  constructor(
    private matDialog: MatDialog,
    public authService: AuthService,
    public userService: UserService,
    private router: Router,
    public messagingService: MessagingService
  ) 
  {
  }

  ngOnInit(): void { 
    if (this.authService.isAuthorized())
      this.messagingService.connectToSignalRServer();

    this.loadProfilePicture();
    this.authService.login$.subscribe(_ => {
      this.loadProfilePicture();
      this.messagingService.connectToSignalRServer();
    });
    this.userService.edit$.subscribe(_ => {
      this.loadProfilePicture();
    });
  }

  ngOnDestroy(): void {
    this.messagingService.disconnectFromSignalRServer();
  }

  onLogout(){
    this.authService.logout();
    this.messagingService.disconnectFromSignalRServer();
    this.router.navigate(['/auth/login'])
  }
  
  loadProfilePicture(){
    let userId: number = this.authService.getUserId();
    if (userId != null) {
      this.userService.getById(userId).subscribe(user => {
        if (user.profilePicture != null)
          this.profilePic = user.profilePicture!;
        else
          this.profilePic = '/assets/images/default_profile_pic.jpg';
      })
    }
  }
}
