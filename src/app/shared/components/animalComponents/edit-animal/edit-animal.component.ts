import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Animal } from "../../../../core/models/Animal";
import {AnimalService} from "../../../../core/services/animalService/animal.service";
import {MainAnimalComponent} from "../main-animal/main-animal.component";


@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.sass']
})
export class EditAnimalComponent implements OnInit {

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Animal,
    public dialogRef: MatDialogRef<MainAnimalComponent>,
    private animalService : AnimalService
  ) { }

  form = new FormGroup({
    nickname: new FormControl("", Validators.minLength(1)),
    birthDate : new FormControl()
  });

  ngOnInit(): void {
  }

  onSaveForm(): void{
    if(this.form.value.nickname != "") {
      this.data.nickName = this.form.value.nickname!;
    }
    if(this.form.value.birthDate != null){
      this.data.birthDate = this.form.value.birthDate;
    }
    this.animalService.updateAnimal(this.data).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }


}
