import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Animal } from "../../../../core/models/Animal";
import { MainAnimalComponent } from "../main-animal/main-animal.component";
import { AnimalService } from "../../animalService/animal.service";

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.sass']
})
export class AddAnimalComponent implements OnInit {

  animalPhoto: string | null = null;

  constructor(
    @Inject(FormBuilder) private fB: FormBuilder,
    private animalService : AnimalService,
    public dialogRef: MatDialogRef<MainAnimalComponent>
  ) { }

  form = new FormGroup({
    nickName: new FormControl("", Validators.minLength(1)),
    birthDate: new FormControl()
  });

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSaveForm() : void {
    const finalData : Animal = this.form.value as Animal;
    if(finalData.birthDate==null)
    {
      finalData.birthDate = new Date(Date.now());
    }
    finalData.photoUrl = this.animalPhoto;
    this.animalService.createAnimal(finalData).subscribe(() => this.dialogRef.close(true));
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
  }
}

