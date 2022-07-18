import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {AnimalService} from "../../animalService/animal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Appointment} from "../../../../core/models/Appointment";
import {MainAnimalComponent} from "../main-animal/main-animal.component";
import {AnimalParameters} from "../../../../core/models/operational-models/QueryParameters/AnimalParameters";
import {FileSaverService} from "ngx-filesaver";
import {HttpResponse} from "@angular/common/http";
import {saveAs} from "file-saver";

@Component({
  selector: 'app-animal-medcard',
  templateUrl: './animal-medcard.component.html',
  styleUrls: ['./animal-medcard.component.sass']
})

export class AnimalMedcardComponent implements OnInit {

  dataSource: MatTableDataSource<Appointment> = new MatTableDataSource();
  @ViewChild(MatSort) sort?: MatSort;
  displayedColumns: string[] = ['data','disease'];
  pagingInfo : AnimalParameters | null = null;
  itemsPerPage : number = 5;
  options = [
    {name: "5", value: 5},
    {name: "10", value: 10},
    {name: "All", value: 0}
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) private data : number,
    private animalService: AnimalService,
    public dialogRef: MatDialogRef<MainAnimalComponent>,
    private fS:FileSaverService)
  {}

  private updateList(CurrentPage: number = 1, PageSize: number = 5): void {
    this.animalService.getMedCard(this.data, CurrentPage, PageSize).subscribe((data) => {
      this.dataSource.data = data.entities;
      this.dataSource.sort = this.sort!;
      this.updatePagingInfo(data);
    });
  }

  MakePdf(){
    this.animalService.getPDF(this.data, 1, this.itemsPerPage);
  }

  onNextButtonInfoClick() {
    if (this.pagingInfo?.hasNext) {

      this.updateList(this.pagingInfo!.currentPage + 1, this.pagingInfo!.pageSize);
    }

  }

  onPrevButtonInfoClick() {

    if (this.pagingInfo?.hasPrevious) {

      this.updateList(this.pagingInfo!.currentPage - 1, this.pagingInfo!.pageSize);
    }

  }

  private updatePagingInfo(data: AnimalParameters): void {
    this.pagingInfo = <AnimalParameters>data;
  }

  selectOption() {
    this.updateList(1, this.itemsPerPage);
  }

  ngOnInit(): void {
    this.updateList(1,5);
  }

  onNoClick(): void{
    this.dialogRef.close(false);
  }

}
