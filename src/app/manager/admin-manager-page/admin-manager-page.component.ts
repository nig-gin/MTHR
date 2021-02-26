import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestApiService} from '../shared/components/services/restApi.service';
import {UserSt} from '../../shared/object/user-st';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
// id: number;
// fullName: string;
// username: string;
// email: string;
// phone: string;
// password: string;
// prompt: string; /*подсказка*/
// position: string;
// categoria: string;
@Component({
  selector: 'app-admin-manager-page',
  templateUrl: './admin-manager-page.component.html',
  styleUrls: ['./admin-manager-page.component.scss']
})
export class AdminManagerPageComponent implements OnInit, OnDestroy{
  displayedColumns = ['id', 'fullName', 'username', 'email'];
  // dataSource = this.restApiService.userSts;
  pSub!: Subscription;
  dSub!: Subscription;
  users: UserSt[] = [];
  constructor(
    public restApiService: RestApiService
  ) {
  }

  ngOnInit(): void {
    this.restApiService.getAll().subscribe(users => {
      this.users = users;
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
}



