import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {RestApiService} from '../shared/components/services/restApi.service';
import {UserSt} from '../../shared/object/user-st';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {DialogOverviewComponent} from '../shared/components/dialog-overview/dialog-overview.component';


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
  username!: [string];
  name!: string;

  constructor(
    public restApiService: RestApiService,
    public dialog: MatDialog,
  ) {}


ngOnInit(): void {
  this.restApiService.getAll().subscribe(users => {
    this.users = users;

  });
}


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: {name: this.name, username: this.users}
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

  remove(id: string) {

    // this.dSub = this.restApiService.remove(id).subscribe(() => {
    //   this.users = this.users.filter(user => user.id !== id);
    // });
    console.log(id + 'remove bottom');
  }
}

