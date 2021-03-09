import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSt} from '../../../../shared/object/user-st';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {jourInterface} from '../../../../shared/object/interfeces';

@Injectable({providedIn: 'root'})





export class JournalRestApiService {
  url = 'http://192.168.1.17:8080';
constructor(private httpClient: HttpClient) {}

  getAll(): Observable<jourInterface[]> {
    return this.httpClient.get(`${this.url}/works/all`)
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


 create(reglam: jourInterface): Observable<jourInterface> {
  return this.httpClient.post<jourInterface>(`${this.url}/works/add`, reglam)
    .pipe(
      map((reglams: jourInterface) => reglams as jourInterface)

    );

 }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }
}
