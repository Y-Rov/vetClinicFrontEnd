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
    this.animalService.createAnimal(finalData).subscribe(() => this.dialogRef.close(true));
  }
}

