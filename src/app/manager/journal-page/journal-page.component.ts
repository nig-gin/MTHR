import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/interfeces';
import {RestApiService} from '../shared/services/restApi.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements OnInit, OnDestroy {

  journals: jourInterface[] = [];


  constructor(
    private restApiService: RestApiService,
    private pSub: Subscription,
    private dSub: Subscription,
    ) {
  }

  ngOnInit(): void {
    this.pSub = this.restApiService.getAll().subscribe(journals => {
      this.journals = journals;
    });

  }
  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
      console.log('received');
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
      console.log('received2');
    }
  }
}
  //   const url = 'http://192.168.1.17:8080/task/all';
  //   this.httpClient.get(url)
  //     .subscribe(response => {
  //       console.log('Response', response);
  //     });
  // }


