import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {jourInterface} from '../../../../shared/object/interfeces';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import {UserSt} from '../../../../shared/object/user-st';

@Injectable({providedIn: 'root'})
export class RestApiService {



  userSts: UserSt[] = [];
  constructor(private httpClient: HttpClient){}

    getUsers() {
      const url = 'http://192.168.1.17:8080/task/all';
      this.httpClient.get<UserSt[]>(`${environment.fbDbUrl}+/users.json`)
        .subscribe(userSt => {
          console.log('response', userSt);
          this.userSts = userSt;
    });
  }

  }



// getUsers(): Observable<UserSt[]> {
//   const url = 'http://192.168.1.17:8080/task/all';
//   this.httpClient.get<UserSt[]>(`${environment.fbDbUrl}/users.json`)
//     .subscribe(userSt => {
//       console.log('response', userSt);
//       this.userSt = userSt;
//     });
// }
