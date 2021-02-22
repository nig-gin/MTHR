import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jourInterface} from '../../shared/object/interfeces';
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

  }
}

