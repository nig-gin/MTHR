import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.scss']
})
export class JournalPageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const url = 'http://192.168.1.17:8080/task/all';
    this.httpClient.get(url)
      .subscribe(response => {
        console.log('Response', response);
      });

  }
}
