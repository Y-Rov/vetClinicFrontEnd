import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimalService} from "../../animalService/animal.service";
import {Animal} from "../../../../core/models/Animal";
import {MatDialog} from "@angular/material/dialog";
import {DeleteAnimalComponent} from "../delete-animal/delete-animal.component";
import {EditAnimalComponent} from "../edit-animal/edit-animal.component";
import {AddAnimalComponent} from "../add-animal/add-animal.component";
import {AnimalMedcardComponent} from "../animal-medcard/animal-medcard.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-animal',
  templateUrl: './main-animal.component.html',
  styleUrls: ['./main-animal.component.sass']
})
export class MainAnimalComponent implements OnInit {

  animals : Animal[] = [];
  ownerId : number = 0;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog) {
    this.ownerId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private updateList(): void {
    console.log(this.ownerId);
    this.animalService.getAllAnimals(this.ownerId).subscribe((data) => {
      console.log(data);
      this.animals = data;
      console.log(this.animals)
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  onDeleteAnimal(animal:Animal){
    const dialogRef = this.matDialog.open(DeleteAnimalComponent,{
      autoFocus:false,
      data:{
        id: animal.id
      }
    });

    dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
  }

  onEditAnimal(animal:Animal){
    const dialogRef = this.matDialog.open(EditAnimalComponent,{
      autoFocus:false,
      data:animal
    });

    dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
  }

  onNewAnimal(){
    const dialogRef = this.matDialog.open(AddAnimalComponent);

    dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
  }

  onViewMedCard(id: number) {
    const dialogRef = this.matDialog.open(AnimalMedcardComponent,{
      autoFocus:false,
      data:id
    });

    dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
  }
}
