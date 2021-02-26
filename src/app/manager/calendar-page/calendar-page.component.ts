import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {UserSt} from '../../shared/object/user-st';
import {RestApiService} from '../shared/components/services/restApi.service';
import {Element} from '@angular/compiler';



@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit, OnDestroy {


  pSub!: Subscription;
  dSub!: Subscription;
  users: UserSt[] = [];

  displayedColumns: string[] = ['username', 'categoria', 'fullName',
                            'email', 'password', 'phone', 'prompt', 'act'];
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

  remove(id: any) {

  }
}
