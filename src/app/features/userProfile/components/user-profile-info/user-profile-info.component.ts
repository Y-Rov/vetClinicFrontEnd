import { Component, OnInit } from '@angular/core';
import {User} from "../../../../core/models/User";
import {UserService} from "../../../userDashboard/services/userService/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.sass']
})
export class UserProfileInfoComponent implements OnInit {
  id: number = 0;
  user: User | null = null;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getUser(this.id);
  }

  getUser(id: number): void {
    this.userService.getById(id).subscribe(user => this.user = user);
  }
}
