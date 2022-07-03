import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../../../../core/models/User";
import { MatSort } from "@angular/material/sort";
import { UserService } from "../../services/userService/user.service";
import { MatDialog } from "@angular/material/dialog";
import { DeleteUserComponent } from "../delete-user/delete-user.component";
import { CreateEmployeeComponent } from "../create-employee/create-employee.component";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  displayedColumns: string[] = [
    'firstName', 'lastName', 'email', 'phoneNumber', 'birthDate', 'role', 'edit', 'delete'
  ];

  pageSizeOptions: { name: string; value: number }[] = [
    { name: '5', value: 5 },
    { name: '10', value: 10 },
    { name: '25', value: 25 }
  ];

  orderByOptions: { name: string; value: string }[] = [
    { name: 'First Name', value: 'FirstName' },
    { name: 'Last Name', value: 'LastName' },
    { name: 'Email', value: 'Email' },
    { name: 'Phone Number', value: 'PhoneNumber' },
    { name: 'Date of Birth', value: 'BirthDate' },
  ];
  
  currentPageSize: number = this.pageSizeOptions[0].value;
  currentPageNumber: number = 1;
  filterValue: string | null = null;
  currentOrderByOption: string | null = null;

  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog) { }

  private updateUsers(takeCount?: number, skipCount: number = 0, filterParam: string | null = null, orderByParam: string | null = null): void {
    this.userService.getAllUsers(takeCount, skipCount, filterParam, orderByParam).subscribe(users => {
      this.dataSource.data = users;
      this.dataSource.sort = this.sort!;
    });
  }

  ngOnInit(): void {
    this.updateUsers(this.currentPageSize);
  }

  onDelete(user: User): void {
    const dialogRef = this.matDialog.open(DeleteUserComponent, {
      autoFocus: false,
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {
      if (requireReload) {
        this.updateUsers(this.currentPageSize, this.currentPageSize * (this.currentPageNumber - 1));
      }
    });
  }

  onCreateEmployee(): void {
    const dialogRef = this.matDialog.open(CreateEmployeeComponent);

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {
      if (requireReload) {
        this.updateUsers(this.currentPageSize, this.currentPageSize * (this.currentPageNumber - 1));
      }
    });
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.updateUsers(this.currentPageSize, 0, this.filterValue);
  }

  onPrevPageClick(): void {
    this.currentPageNumber -= 1;
    this.updateUsers(this.currentPageSize, this.currentPageSize * (this.currentPageNumber - 1));
  }

  onNextPageClick(): void {
    this.currentPageNumber += 1;
    this.updateUsers(this.currentPageSize, this.currentPageSize * (this.currentPageNumber - 1));
  }

  selectPageSizeOption(): void {
    this.updateUsers(this.currentPageSize);
    this.currentPageNumber = 1;
  }

  selectOrderByOption(orderOption: string): void {
    this.currentPageNumber = 1;
    this.updateUsers(this.currentPageSize, 0, this.filterValue, orderOption);
  }
}