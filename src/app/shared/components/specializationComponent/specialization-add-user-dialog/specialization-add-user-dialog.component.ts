import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../../../core/models/User";
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Specialization} from "../../../../core/models/Specialization";
import {SpecializationListComponent} from "../specialization-list/specialization-list.component";
import {UserService} from "../../../../core/services/userService/user.service";
import {SpecializationService} from "../../../../core/services/specializationService/specialization.service";

@Component({
  selector: 'app-specialization-add-user-dialog',
  templateUrl: './specialization-add-user-dialog.component.html',
  styleUrls: ['./specialization-add-user-dialog.component.sass']
})
export class SpecializationAddUserDialogComponent implements OnInit {
  users!: User[];
  selectedUsers!: User[];
  isSelectionChanged: boolean = false;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data : Specialization,
              private dialog: MatDialogRef<SpecializationListComponent>,
              private userService: UserService,
              private specializationService: SpecializationService) {
    userService.getAll()
      .subscribe((users) => this.users = users);
  }

  onSave() : void{
    if(this.isSelectionChanged){
      this.data.users = this.selectedUsers;
    }
    this.specializationService.addUsers(this.data)
      .subscribe(() => this.dialog.close(true));
  }

  onMultiSelectSubmit(event : any) : void{
    this.selectedUsers = [...event.data] as User[];
    this.isSelectionChanged = event.isChanged;
  }

  onCancelClick() : void{
    this.dialog.close(false);
  }

  ngOnInit(): void {
  }

}
