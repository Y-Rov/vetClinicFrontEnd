import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/userService/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.sass']
})
export class UserProfileInfoComponent implements OnInit {
  id: number = 0;
  user: User | null = null;
  subscription: Subscription | null = null;

  constructor(
    private userService: UserService, 
    private activatedRoute: ActivatedRoute) { 
      this.subscription = this.activatedRoute.params.subscribe(params => this.id = +params['id']);
    }

  ngOnInit(): void {
    this.get(this.id);
  }

  get(id: number): void {
    this.userService.getUserById(id)
      .subscribe(user => this.user = user);
  }
}
