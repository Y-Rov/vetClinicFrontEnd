import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnimalService} from "../../../../core/services/animalService/animal.service";
import {Animal} from "../../../../core/models/Animal";
import {MatDialog} from "@angular/material/dialog";
import {DeleteAnimalComponent} from "../delete-animal/delete-animal.component";
import {EditAnimalComponent} from "../edit-animal/edit-animal.component";
import {AddAnimalComponent} from "../add-animal/add-animal.component";
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-main-animal',
  templateUrl: './main-animal.component.html',
  styleUrls: ['./main-animal.component.sass',
    "../../../../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class MainAnimalComponent implements OnInit {

  animals : Animal[] | null = null;

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  slider: KeenSliderInstance | null = null

  constructor(
    private animalService : AnimalService,
    private matDialog: MatDialog)
  {
    this.updateList();
  }

  private updateList(){
    this.animalService.getAnimals().subscribe((animals)=>{
      this.animals = animals;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  ngAfterViewInit(){
    this.slider = new KeenSlider(this.sliderRef.nativeElement,{
      loop:true,
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
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

  }
}
