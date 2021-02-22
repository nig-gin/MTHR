import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/interfeces';
import {RestApiService} from '../shared/components/services/restApi.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements OnInit {


  constructor(
    public restApiService: RestApiService
  ) {}

  ngOnInit(): void {
    this.restApiService.getAll();

  }
}


  //   const url = 'http://192.168.1.17:8080/task/all';
  //   this.httpClient.get(url)
  //     .subscribe(response => {
  //       console.log('Response', response);
  //     });
  // }


