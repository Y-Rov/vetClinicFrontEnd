import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../../../../core/models/User";
import { MatSort } from "@angular/material/sort";
import { UserService } from "../../services/userService/user.service";
import { MatDialog } from "@angular/material/dialog";
import { DeleteUserComponent } from "../delete-user/delete-user.component";
import { CreateEmployeeComponent } from "../create-employee/create-employee.component";
import { FormControl } from '@angular/forms';
import { UserParameters } from 'src/app/core/models/operational-models/QueryParameters/UserParameters';

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
  
  pageInfo: UserParameters | null = null;
  currentPageSize: number = this.pageSizeOptions[0].value;
  currentPageNumber: number = 1;
  filterValue: string | null = null;
  currentOrderByOption: string | null = null;

  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog) { }

  private updateUsers(pageNumber: number = 1, pageSize: number = 5, filterParam: string | null = null, orderByParam: string | null = null): void {
    this.userService.getAllUsers(pageNumber, pageSize, filterParam, orderByParam).subscribe(data => {
      this.dataSource.data = data.users;
      console.log(data.users);
      this.dataSource.sort = this.sort!;
      this.updatePageInfo(data);
    });
  }

  private updatePageInfo(data: UserParameters): void {
    this.pageInfo = <UserParameters>data;
  }

  ngOnInit(): void {
    this.updateUsers(this.currentPageNumber);
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
    this.updateUsers(this.currentPageSize, 5, this.filterValue);
  }

  onPrevPageClick(): void {
    if (this.pageInfo?.hasPrevious) {
      this.updateUsers(this.pageInfo!.currentPage - 1, this.pageInfo!.pageSize);
    }
  }

  onNextPageClick(): void {
    if (this.pageInfo?.hasNext) {
      this.updateUsers(this.pageInfo!.currentPage + 1, this.pageInfo!.pageSize);
    }
  }

  selectPageSizeOptions(): void {
    this.updateUsers(1, this.currentPageSize);
  }

  selectOrderByOption(orderOption: string): void {
    this.currentPageNumber = 1;
    this.updateUsers(this.currentPageSize, 5, this.filterValue, orderOption);
  }
}