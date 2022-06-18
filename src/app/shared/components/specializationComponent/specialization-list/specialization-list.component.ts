import { Component, OnInit } from '@angular/core';
import {Specialization} from "../../../../core/models/Specialization";
import {SpecializationService} from "../../../../core/services/specializationService/specialization.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddSpecializationDialogComponent} from "../add-specialization-dialog/add-specialization-dialog.component";
import {
  SpecializationDeleteDialogComponent
} from "../specialization-delete-dialog/specialization-delete-dialog.component";

@Component({
  selector: 'app-specializationService-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.sass']
})
export class SpecializationListComponent implements OnInit {

  private service: SpecializationService;

   specializations!: Specialization[];

  columnsToDisplay = ["name","procedures","users", "edit", "delete"];

  constructor(private specializationService: SpecializationService,
              private matDialog: MatDialog) {
    this.service = specializationService;
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((specializations =>
        this.specializations = specializations
      ));
  }

  onAddSpecialization(){
    const dialog = this.matDialog.open(AddSpecializationDialogComponent);

    dialog.afterClosed()
      .subscribe((reuireReload: boolean) =>
      {if(reuireReload) this.ngOnInit()});
  }

  onEditSpecialization(specialization : Specialization) : void {

  }

  onDeleteSpecialization(specializationId : number, specializationName : string): void{
    const deleteDialog = this.matDialog.open(SpecializationDeleteDialogComponent,{
      autoFocus: false,
      data:{
        id: specializationId,
        name: specializationName
      }
    });

    deleteDialog.afterClosed()
      .subscribe((requireReload: boolean) => {if(requireReload) this.ngOnInit()});
  }
}
