import { Component, OnInit } from '@angular/core';
import { User} from "../../../../core/models/User";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../userDashboard/services/userService/user.service";
import { AuthService } from "../../../../core/services/authService/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-base-edit.component.html',
  styleUrls: ['./user-base-edit.component.sass']
})
export class UserBaseEditComponent implements OnInit {
  profilePicture: string = '';

  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: new Date(),
    profilePicture: '',
    role: ''
  };

  editUserForm = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
    ]),
    'birthDate': new FormControl(new Date(''))
  });

  constructor(
    private userService: UserService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) {
      this.user.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.userService.getById(this.user.id!).subscribe(user => {
      this.user = {...user};
      this.profilePicture = this.user.profilePicture!;

      this.editUserForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phoneNumber: this.user.phoneNumber,
        birthDate: this.user.birthDate
      });
    });
  }

  private toBase64String(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const bytes = e.target.result.split('base64,')[1];
      this.user.profilePicture = bytes;
    };

    reader.readAsDataURL(file);
  }

  handleFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.toBase64String(file);
  }

  onUpdateUser(): void {
    this.user.firstName = this.editUserForm.value.firstName!;
    this.user.lastName = this.editUserForm.value.lastName!;
    this.user.phoneNumber = this.editUserForm.value.phoneNumber!;
    this.user.birthDate = this.editUserForm.value.birthDate!;

    this.userService.update(this.user).subscribe();
    this.goToPreviousPage();
  }

  goToPreviousPage(): void {
    this.userService.goToPreviousPage();
  }
}
