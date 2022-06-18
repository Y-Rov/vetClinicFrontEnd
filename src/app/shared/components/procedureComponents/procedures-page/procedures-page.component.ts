import { Component, OnInit } from '@angular/core';
import { Procedure } from '../../../../core/models/Procedure';
import { Specialization } from '../../../../core/models/Specialization';
import { ProcedureService } from '../../../../core/services/procedureService/procedure.service'; 
import { MatDialog } from '@angular/material/dialog';
import { DeleteProcedureDialogComponent } from '../delete-procedure-dialog/delete-procedure-dialog.component';
import { EditProcedureDialogComponent } from '../edit-procedure-dialog/edit-procedure-dialog.component';
import { NewProcedureDialogComponent } from '../new-procedure-dialog/new-procedure-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; 
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

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
    private matDialog: MatDialog) {
      //this.updateList();
     }

  private updateList(): void {
    this.procedureService.getAll().subscribe(data => {
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

  onDeleteProcedure(element:any){
    const procedure :Procedure = element as Procedure;

    const dialogRef = this.matDialog.open(DeleteProcedureDialogComponent, {
      autoFocus: false,
      data:{
        name: procedure.name,
        id: procedure.id 
      }
    });

    dialogRef.afterClosed().subscribe((reuireReload: boolean) => {if(reuireReload) this.updateList()});
  }

  onEditProcedure(element: any){
    const procedure: Procedure = element as Procedure;
    const dialogRef = this.matDialog.open(EditProcedureDialogComponent, {
      data: procedure
    });

    dialogRef.afterClosed().subscribe((reuireReload: boolean) => {if(reuireReload) this.updateList()});
  }

  onNewProcedure(){
    const dialogRef = this.matDialog.open(NewProcedureDialogComponent);

    dialogRef.afterClosed().subscribe((reuireReload: boolean) => {if(reuireReload) this.updateList()});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
