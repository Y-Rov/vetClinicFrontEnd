import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {AnimalService} from "../../../../core/services/animalService/animal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Appointment} from "../../../../core/models/Appointment";
import {MainAnimalComponent} from "../main-animal/main-animal.component";

@Component({
  selector: 'app-animal-medcard',
  templateUrl: './animal-medcard.component.html',
  styleUrls: ['./animal-medcard.component.sass']
})

export class AnimalMedcardComponent implements OnInit {

  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource();
  displayedColumns: string[] = ['data','disease'];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data : number,
    private animalService: AnimalService,
    public dialogRef: MatDialogRef<MainAnimalComponent>)
  {}

  private updateList(): void {
    this.animalService.getMedCard(this.data).subscribe((data) => {
      this.dataSource.data = data;
      console.log(data);
      this.dataSource.sort = this.sort!;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  onNoClick(): void{
    this.dialogRef.close(false);
  }

}
