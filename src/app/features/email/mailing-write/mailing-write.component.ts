import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserProfileInfoComponent} from "../../userProfile/components/user-profile-info/user-profile-info.component";
import {EmailService} from "../../../core/services/emailService/email.service";
import {Mailing} from "../../../core/models/Mailing";
import {
  EditorConfigProviderService
} from "../../companyBlog/services/editorConfigProvider/editor-config-provider.service";
import {UserService} from "../../userDashboard/services/userService/user.service";

@Component({
  selector: 'app-mailing-write',
  templateUrl: './mailing-write.component.html',
  styleUrls: ['./mailing-write.component.sass']
})
export class MailingWriteComponent implements OnInit {

  selectedRecipients?: string = "clients";

  form = new FormGroup({
    subject: new FormControl("", Validators.minLength(4)),
    body : new FormControl("", Validators.minLength(10))
  });

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              public dialog: MatDialogRef<UserProfileInfoComponent>,
              private emailService : EmailService,
              public editorConfig: EditorConfigProviderService) { }

  ngOnInit(): void {
  }

  onSend(){
    let mailing : Mailing = this.form.value as Mailing;

    mailing.recipients = this.selectedRecipients!;

    this.emailService.sendMailing(mailing)
     .subscribe(() => this.dialog.close(true));
  }

  onSelected(selectedValue : string){
    this.selectedRecipients = selectedValue;
  }

  onCancelClick() : void {
    this.dialog.close(false);
  }
}
