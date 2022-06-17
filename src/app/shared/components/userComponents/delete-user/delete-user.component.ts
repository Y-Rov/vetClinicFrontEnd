import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/userService/user.service';
import { UsersComponent } from '../users/users.component';

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
    @Inject(MAT_DIALOG_DATA) private data : {id: number, firstName: string, lastName: string},
    public dialogRef: MatDialogRef<UsersComponent>,
    private userService : UserService) {
      this.user.id = this.data.id;
      this.user.firstName = this.data.firstName;
      this.user.lastName = this.data.lastName;
    }

  ngOnInit(): void {
  }

  onDelete(): void {
    //this.userService.getById(this.user.id!).subscribe(user => this.user = user);
    this.userService.deleteById(this.user.id!).subscribe(() => this.dialogRef.close(true));
  }

  onDiscard(): void {
    this.dialogRef.close(false);
  }
}
