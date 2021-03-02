import {Component, HostListener, Injectable, OnDestroy, OnInit} from '@angular/core';
import {AdminRestApiService} from '../shared/components/services/adminRestApi.service';
import {UserSt} from '../../shared/object/user-st';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {DialogOverviewComponent} from '../shared/components/dialog-overview/dialog-overview.component';

export interface userConfirmRemove {
  id: string;
  username: string;
}

@Component({
  selector: 'app-admin-manager-page',
  templateUrl: './admin-manager-page.component.html',
  styleUrls: ['./admin-manager-page.component.scss']
})
export class AdminManagerPageComponent implements OnInit, OnDestroy{


  pSub!: Subscription;
  dSub!: Subscription;
  users: UserSt[] = [];
  trusted!: boolean;

  displayedColumns: string[] = ['username', 'categoria', 'fullName',
    'email', 'password', 'phone', 'prompt', 'act'];

  // username!: [string];
  name!: string;

  constructor(
    public restApiService: AdminRestApiService,
    public dialog: MatDialog,
  ) {}


ngOnInit(): void {
   this.restApiService.getAll().subscribe(users => {
     this.users = users;
  });

}


  openDialog(id: string, username: string): void {
    console.log('id = ', id);
    console.log('username = ', username);
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: {id, username},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  // remove(id: string) {
  //
  //   this.dSub = this.restApiService.remove(id).subscribe(() => {
  //     this.users = this.users.filter(user => user.id !== id);
  //   });
  //   console.log(id + 'remove bottom');
  // }
}

