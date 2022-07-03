import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Specialization} from "../../../../core/models/Specialization";
import {SpecializationService} from "../../services/specializationService/specialization.service";
import {SpecializationListComponent} from "../specialization-list/specialization-list.component";

@Component({
  selector: 'app-specialization-edit-dialog',
  templateUrl: './specialization-edit-dialog.component.html',
  styleUrls: ['./specialization-edit-dialog.component.sass']
})
export class SpecializationEditDialogComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl("", Validators.minLength(4))
  });

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data : Specialization,
              public dialog : MatDialogRef<SpecializationListComponent>,
              private specializationService: SpecializationService) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(!this.form.valid) {
      return;
    }
    if(!(this.form.dirty)) {
      this.dialog.close(false);
    }

    this.data.name = this.form.value.name!;
    this.specializationService.update(this.data)
      .subscribe(() => this.dialog.close(true));
  }

  onCancelClick() : void{
    this.dialog.close(false);
  }

}
