import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../../../../core/services/animalService/animal.service";
import {Animal} from "../../../../core/models/Animal";

@Component({
  selector: 'app-main-animal',
  templateUrl: './main-animal.component.html',
  styleUrls: ['./main-animal.component.sass']
})
export class MainAnimalComponent implements OnInit {

  animals : Animal[] | null = null;

  constructor(private animalService : AnimalService)
  {
    this.updateList();
  }

  private updateList(){
    this.animalService.getAnimals().subscribe((animals)=>{
      this.animals = animals;
      console.log(animals);
    })
  }

  ngOnInit(): void {
  }

}
