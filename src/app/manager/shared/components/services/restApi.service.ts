import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {jourInterface} from '../../../../shared/interfeces';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RestApiService {


  journals: jourInterface[] = [];
  constructor(private httpClient: HttpClient

               ){
  }
  getAll() {
      const url = 'http://192.168.1.17:8080/task/all';
      this.httpClient.get<jourInterface[]>(url)
        .subscribe(journals => {
          console.log('response', journals);
          this.journals = journals;
    });
  }
}


