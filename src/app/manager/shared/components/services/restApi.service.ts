import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {jourInterface} from '../../../../shared/object/interfeces';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import {UserSt} from '../../../../shared/object/user-st';

@Injectable({providedIn: 'root'})
export class RestApiService {



  public userSts: UserSt[] = [];
  constructor(private httpClient: HttpClient){}

  getUsers() {
    const url = 'http://192.168.1.17:8080/task/all';
    this.httpClient.get<UserSt[]>(`${environment.fbDbUrl}/users.json`)
      .subscribe(userSt => {
        console.log('response', userSt);
        this.userSts = userSt;
      });
  }
  getAll(): Observable<UserSt[]> {
    return this.httpClient.get(`${environment.fbDbUrl}/users.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
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
