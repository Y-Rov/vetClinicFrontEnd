// import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatTableDataSource} from "@angular/material/table";
// import {Animal} from "../../../../core/models/Animal";
// import {MatSort} from "@angular/material/sort";
// import {MatPaginator} from "@angular/material/paginator";
// import {AnimalService} from "../../../../core/services/animalService/animal.service";
// import {MatDialog} from "@angular/material/dialog";
// import {DeleteAnimalComponent} from "../delete-animal/delete-animal.component";
// import {EditAnimalComponent} from "../edit-animal/edit-animal.component";
// import {AddAnimalComponent} from "../add-animal/add-animal.component";
//
// @Component({
//   selector: 'app-animal-medcard',
//   templateUrl: './animal-medcard.component.html',
//   styleUrls: ['./animal-medcard.component.sass']
// })
//
// export interface App{
//   Disease : string;
//   Date : Date;
// }
//
// export class AnimalMedcardComponent implements OnInit {
//
//   dataSource: MatTableDataSource<Animal> = new MatTableDataSource();
//   displayedColumns: string[] = ['nickname', 'disease', 'date'];
//
//   @ViewChild(MatSort) sort?: MatSort;
//   @ViewChild(MatPaginator) paginator?: MatPaginator;
//
//   constructor(
//     private animalService: AnimalService,
//     private matDialog: MatDialog) {
//     this.updateList();
//   }
//
//   private updateList(): void {
//     this.animalService.getAnimals().subscribe((data) => {
//       this.dataSource.data = data;
//       this.dataSource.sort = this.sort!;
//     });
//   }
//
//   ngOnInit(): void {
//     this.updateList();
//   }
//
//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator!;
//   }
//
//   onDeleteAnimal(animal:Animal){
//     const dialogRef = this.matDialog.open(DeleteAnimalComponent,{
//       autoFocus:false,
//       data:{
//         id: animal.id
//       }
//     });
//
//     dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
//   }
//
//   onEditAnimal(animal:Animal){
//     const dialogRef = this.matDialog.open(EditAnimalComponent,{
//       autoFocus:false,
//       data:animal
//     });
//
//     dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
//   }
//
//   onNewAnimal(){
//     const dialogRef = this.matDialog.open(AddAnimalComponent);
//
//     dialogRef.afterClosed().subscribe((reuireReload:boolean)=>{if(reuireReload) this.updateList()});
//   }
//
//   onViewMedCard(id: number) {
//
//   }
//
// }
