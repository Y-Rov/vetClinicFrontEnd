import {Component, Inject, OnInit} from '@angular/core';
import {EmailService} from "../../../core/services/emailService/email.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FeedbacksComponent} from "../../feedback/feedbacks/feedbacks.component";
import {EmailMessage} from "../../../core/models/EmailMessage";

@Component({
  selector: 'app-write-email-dialog',
  templateUrl: './write-email-dialog.component.html',
  styleUrls: ['./write-email-dialog.component.sass']
})
export class WriteEmailDialogComponent implements OnInit {

  form = new FormGroup({
    recipient : new FormControl(this.data, Validators.email),
    subject : new FormControl("", Validators.minLength(4)),
    body : new FormControl("", Validators.minLength(10))
  });

  constructor(@Inject(FormBuilder) private  formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data : string,
              private emailService : EmailService,
              private dialog : MatDialogRef<FeedbacksComponent>) { }

  ngOnInit(): void {
    this.form.controls["recipient"].disable();
  }

  onSendForm() : void{
    let message : EmailMessage = this.form.value as EmailMessage;
    message.recipient = this.data;
    this.emailService.send(message).subscribe(() => this.dialog.close(true));
  }

  onCancelClick() : void {
    this.dialog.close(false);
  }
}
