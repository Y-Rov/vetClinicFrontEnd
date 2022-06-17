import {Component, Inject, OnInit} from '@angular/core';
import {Procedure} from "../../../../core/models/Procedure";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {SpecializationListComponent} from "../specialization-list/specialization-list.component";
import {SpecializationService} from "../../../../core/services/specializationService/specialization.service";
import {ProcedureService} from "../../../../core/services/procedureService/procedure.service";
import {Specialization} from "../../../../core/models/Specialization";

@Component({
  selector: 'app-add-specialization-dialog',
  templateUrl: './add-specialization-dialog.component.html',
  styleUrls: ['./add-specialization-dialog.component.sass']
})
export class AddSpecializationDialogComponent implements OnInit {

  procedures: Procedure[] = [];
  selectedProcedures: Procedure[] = [];
  isSelectionChanged: boolean = false;

  form = new FormGroup({
    name: new FormControl("", Validators.minLength(4))
  });

  constructor(@Inject(FormBuilder) private  formBuilder: FormBuilder,
              private dialog: MatDialogRef<SpecializationListComponent>,
              private specializationService: SpecializationService,
              private  procedureService: ProcedureService) {
    procedureService.getProcedures().subscribe((procedures) =>
    this.procedures = procedures);
  }

  onSaveForm(): void{
    const specialization : Specialization = this.form.value as Specialization;
    this.specializationService.create(specialization)
      .subscribe(() => this.dialog.close(true));
  }

  onCancelClick() : void{
    this.dialog.close(false);
  }

  ngOnInit(): void {
  }

}
