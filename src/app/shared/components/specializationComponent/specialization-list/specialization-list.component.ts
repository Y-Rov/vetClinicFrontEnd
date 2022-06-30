import {Component, OnInit, ViewChild} from '@angular/core';
import {Specialization} from "../../../../core/models/Specialization";
import {SpecializationService} from "../../../../core/services/specializationService/specialization.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddSpecializationDialogComponent} from "../add-specialization-dialog/add-specialization-dialog.component";
import {
  SpecializationDeleteDialogComponent
} from "../specialization-delete-dialog/specialization-delete-dialog.component";
import {SpecializationEditDialogComponent} from "../specialization-edit-dialog/specialization-edit-dialog.component";
import {MatPaginator} from "@angular/material/paginator";
import {
  SpecializationAddProcedureComponent
} from "../specialization-add-procedure/specialization-add-procedure.component";
import {
  SpecializationAddUserDialogComponent
} from "../specialization-add-user-dialog/specialization-add-user-dialog.component";

@Component({
  selector: 'app-specializationService-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.sass']
})
export class SpecializationListComponent implements OnInit {

  private service: SpecializationService;

  specializations: MatTableDataSource<Specialization>
    = new MatTableDataSource();
    //Specialization[];

  columnsToDisplay = ["name","procedures","users", "edit", "delete"];

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private specializationService: SpecializationService,
              private matDialog: MatDialog) {
    this.service = specializationService;
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((specializations =>
        this.specializations.data = specializations
      ));
  }

  ngAfterViewInit() {
    this.specializations.paginator = this.paginator!;
  }

  onAddSpecialization(){
    const dialog = this.matDialog.open(AddSpecializationDialogComponent);

    dialog.afterClosed()
      .subscribe((requireReload: boolean) =>
        requireReload && this.ngOnInit());
  }

  onEditSpecialization(specialization : Specialization) : void {
    const editDialog = this.matDialog.open(SpecializationEditDialogComponent,{
      data: specialization
    });

    editDialog.afterClosed()
      .subscribe((requireReload: boolean) => requireReload && this.ngOnInit());
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
      .subscribe((requireReload: boolean) => requireReload && this.ngOnInit());
  }

  onAddProcedure(specialization : Specialization) : void{
    const dialog = this.matDialog
      .open(SpecializationAddProcedureComponent, {
        data: specialization
      });

    dialog.afterClosed()
      .subscribe((requireReload: boolean) => requireReload && this.ngOnInit());
  }

  onRemoveProcedure(procedureId: number,specializationId : number) : void{
    this.specializationService.removeProcedure(procedureId, specializationId)
      .subscribe(() => this.ngOnInit());
  }

  onAddUser(specialization: Specialization) : void{
    const dialog = this.matDialog
      .open(SpecializationAddUserDialogComponent, {
        data: specialization
      });

    dialog.afterClosed()
      .subscribe((requireReload: boolean) => requireReload && this.ngOnInit());
  }

  onRemoveUser(userId: number, specializationId: number) : void{
    this.specializationService.removeUser(userId, specializationId)
      .subscribe(() => this.ngOnInit());
  }
}
