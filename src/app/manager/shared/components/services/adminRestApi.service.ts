import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {jourInterface} from '../../../../shared/object/interfeces';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import {FbCreateResponse, UserSt} from '../../../../shared/object/user-st';
import {userConfirmRemove} from '../../../admin-manager-page/admin-manager-page.component';

@Injectable({providedIn: 'root'})

export class AdminRestApiService {



  public userSts: UserSt[] = [];
  constructor(private httpClient: HttpClient){}

  // getUsers() {
  //   const url = 'http://192.168.1.17:8080/task/all';
  //   this.httpClient.get<UserSt[]>(`${environment.fbDbUrl}/users.json`)
  //     .subscribe(userSt => {
  //       console.log('response', userSt);
  //       this.userSts = userSt;
  //     });
  // }

  // create(user: userConfirmRemove): Observable<UserSt> {
  //   return this.httpClient.post(`${environment.fbDbUrl}/users.json`, user);
  //
  //
  // }
  getAll(): Observable<UserSt[]> {
    return this.httpClient.get(`${environment.fbDbUrl}/users.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
        console.log('response', response);
      }));
  }
  remove(id: string): Observable<void> {
    console.log('remove class', id);
    return this.httpClient.delete<void>(`${environment.fbDbUrl}/users/${id}.json`);
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
