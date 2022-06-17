import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Procedure } from '../../../../core/models/Procedure';
import { Specialization } from '../../../../core/models/Specialization';
import { ProcedureService } from '../../../../core/services/procedureService/procedure.service'; 
import { ProceduresPageComponent } from '../procedures-page/procedures-page.component';
import { SpecializationService } from '../../../../core/services/specialization/specialization.service';

@Component({
  selector: 'app-new-procedure-dialog',
  templateUrl: './new-procedure-dialog.component.html',
  styleUrls: ['./new-procedure-dialog.component.sass']
})
export class NewProcedureDialogComponent implements OnInit {

  specializations: Specialization[] = [];
  selectedSpec: Specialization[] = [];
  isSelectionChanged: boolean = false;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProceduresPageComponent>,
    private procedureService : ProcedureService,
    private specializationService: SpecializationService) {  
      specializationService.getAll().subscribe((data) => this.specializations = data);
    }

  form = new FormGroup({
    name: new FormControl("", Validators.minLength(5)),
    description: new FormControl("", Validators.minLength(5)),
    cost: new FormControl(0, Validators.min(1)),
    durationInMinutes: new FormControl(0, Validators.min(1))
  });

  ngOnInit(): void {
  }

  onSaveForm(): void{
    if(!this.form.valid) {
      return;
    }
    if(!(this.form.dirty || this.isSelectionChanged)) {
      this.dialogRef.close(false);
    }    
    const finalData : Procedure = this.form.value as Procedure;
    finalData.specializations = this.selectedSpec;
    this.procedureService.createProcedure(finalData).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onMultiSelectSubmit(event : any) : void{
    const key: string = event.key;
    this.selectedSpec = [...event.data ] as Specialization[];
    this.isSelectionChanged = event.isChanged;
  }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
  }
}
