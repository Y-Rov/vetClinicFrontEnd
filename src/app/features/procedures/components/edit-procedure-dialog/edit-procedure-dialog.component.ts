import {Component, Inject, OnInit} from '@angular/core';
import {Specialization} from "../../../../core/models/Specialization";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Procedure} from "../../../../core/models/Procedure";
import {SpecializationService} from "../../../specializations/services/specializationService/specialization.service";
import {ProceduresPageComponent} from "../procedures-page/procedures-page.component";
import {ProcedureService} from "../../services/procedureService/procedure.service";

@Component({
  selector: 'app-edit-procedure-dialog',
  templateUrl: './edit-procedure-dialog.component.html',
  styleUrls: ['./edit-procedure-dialog.component.sass']
})
export class EditProcedureDialogComponent implements OnInit {

  specializations: Specialization[];
  selectedSpec: Specialization[];
  isSelectionChanged: boolean = false;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Procedure,
    public dialogRef: MatDialogRef<ProceduresPageComponent>,
    private procedureService : ProcedureService,
    private specializationService: SpecializationService) {
    this.specializations = [];
    this.selectedSpec = [];
    specializationService.getAll().subscribe((data) => this.specializations = data);
  }

  form = new FormGroup({
    name: new FormControl("", Validators.minLength(5)),
    description: new FormControl("", Validators.minLength(5)),
    cost: new FormControl(0, Validators.min(1)),
    durationInMinutes: new FormControl(0, Validators.min(1))
  });

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onSaveForm(): void{
    if(!this.form.valid) {
      return;
    }
    if(!(this.form.dirty || this.isSelectionChanged)) {
      this.dialogRef.close(false);
    }
    this.data.name = this.form.value.name!;
    this.data.description = this.form.value.description!;
    this.data.cost = this.form.value.cost!;
    //this.data.durationInMinutes = this.form.value.durationInMinutes!;
    if(this.isSelectionChanged){
      this.data.specializations = this.selectedSpec;
    }
    this.procedureService.updateProcedure(this.data).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onMultiSelectSubmit(event : any) : void{
    this.selectedSpec = [...event.data ] as Specialization[];
    this.isSelectionChanged = event.isChanged;
  }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged);
  }
}
