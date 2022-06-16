import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Animal } from "../../../../core/models/Animal";
import { MainAnimalComponent } from "../main-animal/main-animal.component";
import { AnimalService } from "../../../../core/services/animalService/animal.service";

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
    nickname: new FormControl("", Validators.minLength(1))
  });

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSaveForm() : void {
    const finalData : Animal = this.form.value as Animal;
    this.animalService.addAnimal(finalData).subscribe(() => this.dialogRef.close(true));
  }
}

