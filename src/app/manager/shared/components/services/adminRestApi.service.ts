import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {jourInterface} from '../../../../shared/object/interfeces';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import { UserSt} from '../../../../shared/object/user-st';
import {userConfirmRemove} from '../../../admin-manager-page/admin-manager-page.component';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})

export class AdminRestApiService {



  constructor(private httpClient: HttpClient,
              private router: Router, ){}

  create(user: UserSt): Observable<UserSt> {
    return this.httpClient.post<UserSt>(`${environment.fbDbUrl}/users.json`, user)
     .pipe(
        map((users: UserSt) => users as UserSt)
      );
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
          }));
        console.log('response', response);
      }));
  }
  // getById(id: string){
  //   return this.httpClient.get(`${environment.fbDbUrl}/posts/${id}.json`)
  // }
  getById(id: number): Observable<UserSt> {
    return this.httpClient.get<UserSt>(`${environment.fbDbUrl}/users/${id}.json`)
      .pipe(map((user: UserSt) => {
        return {
          ...user, id
        };
      }));
  }

  remove(id: number): Observable<void> {
    console.log('remove class', id);
    return this.httpClient.delete<void>(`${environment.fbDbUrl}/users/${id}.json`);
  }

 update(user: UserSt): Observable<UserSt>{
   // console.log(user.id);
    return this.httpClient.patch<UserSt>(`${environment.fbDbUrl}/users/${user.id}.json`, user);

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
