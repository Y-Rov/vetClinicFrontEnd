import { Component, Inject, OnInit } from '@angular/core';
import { User } from "../../../../core/models/User";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UsersComponent } from "../users/users.component";
import { UserService } from "../../services/userService/user.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.sass']
})
export class DeleteUserComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: new Date()
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { id: number, firstName: string, lastName: string },
    public dialogRef: MatDialogRef<UsersComponent>,
    private userService: UserService) {
    this.user.id = this.data.id;
    this.user.firstName = this.data.firstName;
    this.user.lastName = this.data.lastName;
  }

  ngOnInit(): void { }

  onDelete(): void {
    this.userService.deleteById(this.user.id!).subscribe(() => this.dialogRef.close(true));
  }

  onDiscard(): void {
    this.dialogRef.close(false);
  }
}
