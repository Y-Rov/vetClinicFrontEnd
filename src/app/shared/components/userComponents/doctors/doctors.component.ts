import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/userService/user.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.sass']
})
export class DoctorsComponent implements OnInit {
  doctors: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(): void {
    this.userService.getDoctors().subscribe(doctors => this.doctors = doctors);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    if (filterValue !== '') {
      this.doctors = this.doctors.filter(d => 
        d.specializations?.find(s => s.toLowerCase().includes(filterValue)));
    } else {
      this.getDoctors();
    }
  }
}
