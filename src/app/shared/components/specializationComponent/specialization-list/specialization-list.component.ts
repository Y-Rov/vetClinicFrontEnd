import { Component, OnInit } from '@angular/core';
import {Specialization} from "../../../../core/models/Specialization";
import {SpecializationService} from "../../../../core/services/specializationService/specialization.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-specializationService-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.sass']
})
export class SpecializationListComponent implements OnInit {

  private service: SpecializationService;

   specializations!: Specialization[]
  // = [
  //   {id: 0, name: "doctor"},
  //   {id: 1, name: "surgeon"},
  //   {id: 2, name: "manager"},
  //   {id: 3, name: "cleaner"}
  // ]
  columnsToDisplay = ["name","procedures"];

  constructor(specializationService: SpecializationService) {
    this.service = specializationService;
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((specializations =>
        this.specializations = specializations
      ));
  }

  onAddSpecialization(){

  }
}
