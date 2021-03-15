import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSt} from '../../../../shared/object/user-st';
import {environment} from '../../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {jourInterface} from '../../../../shared/object/interfeces';
import {test} from '../../../journal-page/create-reglam-works-page/create-reglam-works-page.component';
import {Category} from '../../../../shared/object/category';
import {Mexanisms} from '../../../../shared/object/mechanisms';

@Injectable({providedIn: 'root'})





export class JournalRestApiService {
  url = 'http://192.168.1.17:8080';
  urlAddHero = 'http://192.168.1.17:8080/works/add';
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


 create(reglamWork: jourInterface): Observable<jourInterface> {
  return this.httpClient.post<jourInterface>(`${this.url}/works/add`, reglamWork)
    .pipe(
      map((reglamWorks: jourInterface) => reglamWorks as jourInterface),
    );
 }
  getCategory(): Observable<Category[]> {
    return this.httpClient.get(`${this.url}/category/all`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
        console.log('category', response);
      }));
  }
  getMexanism(): Observable<Mexanisms[]> {
    return this.httpClient.get(`${this.url}/mexanism/all`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
        console.log('mexanism', response);
      }));
  }
    getUser(): Observable<UserSt[]> {
      return this.httpClient.get(`${this.url}/user/all`)
        .pipe(map((response: { [key: string]: any }) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }));
          console.log('user', response);
        }));
    }
  }

  // addHero1(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }
  //   addHero(hero: jourInterface): Observable<jourInterface> {
  //     return this.httpClient.post<jourInterface>(this.urlAddHero, hero)
  //       .pipe(
  //         catchError(this.handleError('addHero', hero))
  //       );
  // }
