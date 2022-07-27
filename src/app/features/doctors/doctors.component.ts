import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/core/models/Chat';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { User } from "../../core/models/User";
import { MessagingService } from '../messaging/services/messaging.service';
import { UserService } from "../userDashboard/services/userService/user.service";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.sass']
})
export class DoctorsComponent implements OnInit {
  doctors: User[] = [];

  constructor(
    private userService: UserService,
    private messagingService: MessagingService,
    public authService: AuthService,
    private router: Router) { }

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

  onAskAQuestion(doctor: User) {
    const chat: Chat = new Chat({
      name: `${doctor.firstName} ${doctor.lastName}`,
      interlocutorId: doctor.id,
      picture: doctor.profilePicture
    })
    this.messagingService.selectedChat = chat;

    this.router.navigate(['/messages']);
  }
}
