import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Animal } from "../../../../core/models/Animal";
import {AnimalService} from "../../animalService/animal.service";
import {MainAnimalComponent} from "../main-animal/main-animal.component";


@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.sass']
})
export class EditAnimalComponent implements OnInit {

  animalPhoto: string | null = null;
  isPhotoUpdated: Boolean = false;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Animal,
    public dialogRef: MatDialogRef<MainAnimalComponent>,
    private animalService : AnimalService
  ) { }

  form = new FormGroup({
    nickname: new FormControl("", Validators.minLength(1)),
    birthDate : new FormControl(),
  });

  ngOnInit(): void {
  }

  onSaveForm(): void{
    console.log("bef");
    console.log(this.data);
    if(this.form.value.nickname != "") {
      this.data.nickName = this.form.value.nickname!;
    }
    if(this.form.value.birthDate != null) {
      this.data.birthDate = this.form.value.birthDate;
    }
    if(this.isPhotoUpdated){
      this.data.PhotoUrl = this.animalPhoto;
    }
    console.log("aft");
    console.log(this.data);
    this.animalService.updateAnimal(this.data).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  private convertFileToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const base64 = e.target.result.split('base64,')[1];
      this.animalPhoto = base64;
    };

    reader.readAsDataURL(file);
  }

  handleFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.convertFileToBase64(file);

    this.isPhotoUpdated = true;
  }

}
