import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MainAnimalComponent} from "../main-animal/main-animal.component";
import {AnimalService} from "../../../../core/services/animalService/animal.service";


@Component({
  selector: 'app-delete-animal',
  templateUrl: './delete-animal.component.html',
  styleUrls: ['./delete-animal.component.sass']
})
export class DeleteAnimalComponent implements OnInit {

  id:number;
  nickname: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data : {id: number, nickname: string},
    public dialogRef: MatDialogRef<MainAnimalComponent>,
    private animalService : AnimalService) {
    this.id = data.id;
    this.nickname = data.nickname;
  }

  ngOnInit(): void {
  }

  onDeleteProcedure(): void{
    this.animalService.deleteById(this.id).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
