import { Component, OnInit } from '@angular/core';
import { User } from "../../core/models/User";
import { UserService } from "../userDashboard/services/userService/user.service";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.sass']
})
export class DoctorsComponent implements OnInit {
  doctors: User[] = [];

  constructor(
    private userService: UserService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(specialization: string = ""): void {
    this.userService.getDoctors(specialization).subscribe(doctors => this.doctors = doctors);
  }

  getDoctorSpecializations(doctor: User): string {
    return doctor.specializations!.map(s => s.name)?.join(', ');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.getDoctors(filterValue);
  }
}
