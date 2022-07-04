import {Component, Inject, OnInit} from '@angular/core';
import {Procedure} from "../../../../core/models/Procedure";
import {FormBuilder} from "@angular/forms";
import {ProcedureService} from "../../../../core/services/procedureService/procedure.service";
import {SpecializationService} from "../../services/specializationService/specialization.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SpecializationListComponent} from "../specialization-list/specialization-list.component";
import {Specialization} from "../../../../core/models/Specialization";

@Component({
  selector: 'app-specialization-add-procedure',
  templateUrl: './specialization-add-procedure.component.html',
  styleUrls: ['./specialization-add-procedure.component.sass']
})
export class SpecializationAddProcedureComponent implements OnInit {

  procedures!: Procedure[];
  selectedProcedures!: Procedure[];
  isSelectionChanged: boolean = false;
  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data : Specialization,
              private dialog: MatDialogRef<SpecializationListComponent>,
              private procedureService: ProcedureService,
              private specializationService: SpecializationService) {
    procedureService.getAll()
      .subscribe((procedures) => this.procedures = procedures);
  }

  onSave() : void{
    if(this.isSelectionChanged){
      this.data.procedures = this.selectedProcedures;
    }
        this.specializationService.addProcedures(this.data)
          .subscribe(() => this.dialog.close(true));
  }

  onMultiSelectSubmit(event : any) : void{
    this.selectedProcedures = [...event.data] as Procedure[];
    this.isSelectionChanged = event.isChanged;
  }

  onCancelClick() : void{
    this.dialog.close(false);
  }

  ngOnInit(): void {
  }

}
