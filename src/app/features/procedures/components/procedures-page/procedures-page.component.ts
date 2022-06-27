import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Procedure} from "../../../../core/models/Procedure";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ProcedureService} from "../../../../core/services/procedureService/procedure.service";
import {AuthService} from "../../../../core/services/authService/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteProcedureDialogComponent} from "../delete-procedure-dialog/delete-procedure-dialog.component";
import {EditProcedureDialogComponent} from "../edit-procedure-dialog/edit-procedure-dialog.component";
import {NewProcedureDialogComponent} from "../new-procedure-dialog/new-procedure-dialog.component";

@Component({
  selector: 'app-procedures-page',
  templateUrl: './procedures-page.component.html',
  styleUrls: ['./procedures-page.component.sass']
})
export class ProceduresPageComponent implements OnInit {

  dataSource: MatTableDataSource<Procedure> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'cost', 'description', 'duration', 'delete', 'edit'];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private procedureService: ProcedureService,
    public authService : AuthService,
    private matDialog: MatDialog) {
  }

  private updateList(): void {
    this.procedureService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort!;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  onDeleteProcedure(element:any){
    const procedure :Procedure = element as Procedure;

    const dialogRef = this.matDialog.open(DeleteProcedureDialogComponent, {
      autoFocus: false,
      data:{
        name: procedure.name,
        id: procedure.id
      }
    });

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {if(requireReload) this.updateList()});
  }

  onEditProcedure(element: any){
    const procedure: Procedure = element as Procedure;
    const dialogRef = this.matDialog.open(EditProcedureDialogComponent, {
      data: procedure
    });

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {if(requireReload) this.updateList()});
  }

  onNewProcedure(){
    const dialogRef = this.matDialog.open(NewProcedureDialogComponent);

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {if(requireReload) this.updateList()});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
