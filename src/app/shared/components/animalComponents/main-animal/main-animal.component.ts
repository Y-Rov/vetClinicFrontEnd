import {Component, OnInit, ViewChild} from '@angular/core';
import {AnimalService} from "../../../../core/services/animalService/animal.service";
import {Animal} from "../../../../core/models/Animal";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DeleteAnimalComponent} from "../delete-animal/delete-animal.component";
import {EditAnimalComponent} from "../edit-animal/edit-animal.component";
import {AddAnimalComponent} from "../add-animal/add-animal.component";

@Component({
  selector: 'app-main-animal',
  templateUrl: './main-animal.component.html',
  styleUrls: ['./main-animal.component.sass']
})
export class MainAnimalComponent implements OnInit {

  dataSource: MatTableDataSource<Animal> = new MatTableDataSource();
  displayedColumns: string[] = ['nickname','birthdate', 'delete','edit'];

  @ViewChild(MatPaginator) pagination?: MatPaginator;

  constructor(
    private animalService : AnimalService,
    private matDialog: MatDialog)
  {
    this.updateList();
  }

  private updateList(){
    this.animalService.getAnimals().subscribe((animals)=>{
      this.dataSource.data = animals;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.pagination!;
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

}
