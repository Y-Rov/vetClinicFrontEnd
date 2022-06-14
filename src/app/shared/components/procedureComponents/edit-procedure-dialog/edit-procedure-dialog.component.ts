import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Procedure } from '../../../../core/models/Procedure';
import { Specialization } from '../../../../core/models/Specialization';
import { ProcedureService } from '../../../../core/services/procedure.service'; 
import { ProceduresPageComponent } from '../procedures-page/procedures-page.component';

const SAMPLE_DATA: Specialization[] =  [
  {
    "id" :  1,
    "name" : "first spec",
  },
  {
    "id" :  2,
    "name" : "second spec",
  },
  {
    "id" :  3,
    "name" : "third spec",
  },
  {
    "id" :  4,
    "name" : "fouth spec",
  },
  {
    "id" :  5,
    "name" : "fifth spec",
  },
  {
    "id" :  6,
    "name" : "six spec",
  },
  {
    "id" :  7,
    "name" : "sevens spec",
  }
]

@Component({
  selector: 'app-edit-procedure-dialog',
  templateUrl: './edit-procedure-dialog.component.html',
  styleUrls: ['./edit-procedure-dialog.component.sass']
})
export class EditProcedureDialogComponent implements OnInit {

  specializations: Specialization[] = [];
  selectedSpec: Specialization[] = [];
  isSelectionChanged: boolean = false;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Procedure,
    public dialogRef: MatDialogRef<ProceduresPageComponent>,
    private procedureService : ProcedureService) {  
      this.specializations = SAMPLE_DATA;
    }

  form = new FormGroup({
    name: new FormControl("", Validators.minLength(5)),
    description: new FormControl("", Validators.minLength(5)),
    cost: new FormControl(0, Validators.min(1)),
    duration: new FormControl(0, Validators.min(1))
  });

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onSaveForm(): void{
    this.data.name = this.form.value.name!;
    this.data.description = this.form.value.description!;
    this.data.cost = this.form.value.cost!;
    this.data.duration = this.form.value.duration!;
    this.data.specializations = this.selectedSpec;
    this.procedureService.updateProcedure(this.data).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onMultiSelectSubmit(event : any) : void{
    console.log(...event.data);
    this.selectedSpec = [...event.data ] as Specialization[];
    this.isSelectionChanged = event.isChanged;
  }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
  }
}
