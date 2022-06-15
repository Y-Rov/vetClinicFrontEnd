import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/userService/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 
    'phoneNumber', 'role', 'edit', 'delete'];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog) { }

  private updateList(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.dataSource.data = users;
      this.dataSource.sort = this.sort!;
    });
  }

  ngOnInit(): void {
    this.updateList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
  }

  onDelete(user: User): void {
    const dialogRef = this.matDialog.open(DeleteUserComponent, {
      autoFocus: false,
      data: {
        id: user.id ,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {
      if (requireReload) {
        this.updateList();
      }
    });
  }

  onNewEmployee(): void {
    const dialogRef = this.matDialog.open(CreateEmployeeComponent);

    dialogRef.afterClosed().subscribe((requireReload: boolean) => {
      if (requireReload) {
        this.updateList();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
